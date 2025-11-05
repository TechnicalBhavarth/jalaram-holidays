"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users, Sparkles, Plane, DollarSign, FileText, Clock } from "lucide-react";
import { destinations, Destination } from "@/data/destinations";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const TripFinder = () => {
  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState("");
  const [travelers, setTravelers] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Destination[]>([]);

  const handleSearch = () => {
    // Simple filtering logic - in a real app, this would be more sophisticated
    const budgetNum = parseInt(budget) || 0;
    const filtered = destinations.filter((dest) => {
      const destBudget = parseInt(dest.budget.replace(/[^0-9]/g, "")) || 0;
      const budgetMatch = budgetNum === 0 || destBudget <= budgetNum;
      const prefMatch =
        !preferences ||
        dest.description.toLowerCase().includes(preferences.toLowerCase()) ||
        dest.highlights.some((h) =>
          h.toLowerCase().includes(preferences.toLowerCase())
        );
      return budgetMatch && prefMatch;
    });
    setRecommendations(filtered.slice(0, 6));
    setShowResults(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-emerald-500 w-10 h-10" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              Find Your Perfect Trip
            </h2>
            <Sparkles className="text-sky-500 w-10 h-10" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us your preferences and we'll recommend the perfect destinations for your next adventure
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-12 border border-emerald-100"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Budget Filter */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <DollarSign className="text-emerald-600" size={20} />
                </div>
                Budget (₹)
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>

            {/* Preferences Filter */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                <div className="p-2 bg-sky-100 rounded-lg">
                  <Search className="text-sky-600" size={20} />
                </div>
                Preferences
              </label>
              <input
                type="text"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                placeholder="Beach, Mountains, Culture..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all outline-none"
              />
            </div>

            {/* Travelers Filter */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="text-emerald-600" size={20} />
                </div>
                Travelers
              </label>
              <input
                type="number"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                placeholder="Number of travelers"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-sky-600 hover:from-emerald-600 hover:via-emerald-700 hover:to-sky-700 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Search size={24} />
            Find My Perfect Trip
          </motion.button>
        </motion.div>

        {/* Results Section */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent mb-2">
                Recommended Destinations
              </h3>
              <p className="text-gray-600">Discover your perfect getaway</p>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((dest, index) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100"
                  >
                    {/* Hero Image with Gradient Overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-2xl font-bold text-white mb-1">{dest.name}</h4>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-gray-600 text-sm line-clamp-2">{dest.description}</p>

                      {/* Info Icons */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="p-1.5 bg-emerald-50 rounded-lg">
                            <Clock className="text-emerald-600" size={16} />
                          </div>
                          <span className="font-medium">{dest.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="p-1.5 bg-sky-50 rounded-lg">
                            <Plane className="text-sky-600" size={16} />
                          </div>
                          <span className="font-medium">{dest.flightTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="p-1.5 bg-emerald-50 rounded-lg">
                            <FileText className="text-emerald-600" size={16} />
                          </div>
                          <span className="font-medium">{dest.visaType}</span>
                        </div>
                      </div>

                      {/* Budget */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">Starting from</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                            {dest.budget}
                          </span>
                        </div>
                      </div>

                      {/* Highlights Tags */}
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gradient-to-r from-emerald-50 to-sky-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium border border-emerald-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-lg"
              >
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  <MapPin className="text-gray-400" size={48} />
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  No destinations match your criteria.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Try adjusting your filters for better results!
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TripFinder;
