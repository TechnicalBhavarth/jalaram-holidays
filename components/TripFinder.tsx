"use client";

import React, { useState } from "react";
import { Search, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { destinations, Destination } from "@/data/destinations";
import { Button } from "@/components/ui/Button";

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
    setRecommendations(filtered.slice(0, 3));
    setShowResults(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-orange-500" size={32} />
          <h2 className="text-4xl font-bold">Find Your Perfect Trip</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Tell us your preferences and we'll recommend the perfect destinations
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <MapPin size={20} />
              Budget (₹)
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter your budget"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Search size={20} />
              Preferences
            </label>
            <input
              type="text"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="Beach, Mountains, Culture..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <Users size={20} />
              Travelers
            </label>
            <input
              type="number"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              placeholder="Number of travelers"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <Button
          onClick={handleSearch}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
        >
          <Search className="inline mr-2" size={20} />
          Find My Perfect Trip
        </Button>
      </div>

      {showResults && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Recommended Destinations
          </h3>
          {recommendations.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((dest) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-400" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{dest.name}</h4>
                    <p className="text-gray-600 mb-4">{dest.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar size={16} />
                      <span>{dest.duration}</span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-orange-500 text-lg">
                        {dest.budget}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No destinations match your criteria. Try adjusting your filters!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripFinder;
