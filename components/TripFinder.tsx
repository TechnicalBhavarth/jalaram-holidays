"use client";

import React, { useState } from "react";
import { Search, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { destinations } from "@/data/destinations";
import { Button } from "@/components/ui/Button";

const TripFinder = () => {
  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState("");
  const [travelers, setTravelers] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

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

    setRecommendations(filtered.slice(0, 3));
    setShowResults(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Find Your Perfect Trip
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Tell us your preferences, and we'll find the ideal destination for you
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <MapPin className="w-4 h-4 text-orange-500" />
              Budget (₹)
            </label>
            <input
              type="number"
              placeholder="e.g., 50000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Search className="w-4 h-4 text-orange-500" />
              Preferences
            </label>
            <input
              type="text"
              placeholder="e.g., beach, mountains, culture"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Users className="w-4 h-4 text-orange-500" />
              Travelers
            </label>
            <input
              type="number"
              placeholder="Number of people"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <Button
          onClick={handleSearch}
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Find My Trip
        </Button>
      </div>

      {showResults && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Recommended Destinations for You
          </h3>
          {recommendations.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {dest.budget}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {dest.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {dest.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{dest.duration}</span>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-lg">
                No destinations found matching your criteria. Try adjusting your
                preferences!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripFinder;
