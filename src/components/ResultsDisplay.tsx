import React from 'react';
import { ArrowLeft, TrendingUp, MapPin, Award } from 'lucide-react';
import { NeighborhoodMatch, UserPreferences } from '../types';
import NeighborhoodCard from './NeighborhoodCard';

interface ResultsDisplayProps {
  matches: NeighborhoodMatch[];
  preferences: UserPreferences;
  onBack: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ matches, preferences, onBack }) => {
  const totalActivePreferences = Object.values(preferences).filter(pref => pref > 0).length;
  const averageMatchScore = matches.length > 0 ? 
    matches.reduce((sum, match) => sum + match.matchScore, 0) / matches.length : 0;

  const getTopPreferences = () => {
    return Object.entries(preferences)
      .filter(([_, value]) => value > 0)
      .sort(([_, a], [__, b]) => b - a)
      .slice(0, 3)
      .map(([key, value]) => ({
        key,
        value,
        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
      }));
  };

  const topPreferences = getTopPreferences();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-8">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Perfect Neighborhood Matches</h2>
              <p className="text-green-100">
                Found {matches.length} neighborhoods that match your lifestyle preferences
              </p>
            </div>
            <button
              onClick={onBack}
              className="flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Refine Search</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {Math.round(averageMatchScore * 100)}%
            </div>
            <div className="text-sm text-gray-600">Average Match Score</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
              <MapPin className="text-green-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {matches.length}
            </div>
            <div className="text-sm text-gray-600">Top Matches Found</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
              <Award className="text-purple-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {totalActivePreferences}
            </div>
            <div className="text-sm text-gray-600">Preferences Analyzed</div>
          </div>
        </div>

        {/* Top Preferences */}
        {topPreferences.length > 0 && (
          <div className="px-6 pb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Top Priorities:</h3>
            <div className="flex flex-wrap gap-2">
              {topPreferences.map((pref, index) => (
                <span
                  key={pref.key}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {pref.label} ({pref.value}/5)
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {matches.length > 0 ? (
        <div className="space-y-6">
          {matches.map((match, index) => (
            <NeighborhoodCard
              key={match.neighborhood.id}
              match={match}
              rank={index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No matches found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find neighborhoods that match your current preferences. 
            Try adjusting your criteria or setting different priorities.
          </p>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Adjust Preferences
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;