import React from 'react';
import { MapPin, DollarSign, Shield, Volume2, Bus, Trees, Music, Users } from 'lucide-react';
import { NeighborhoodMatch } from '../types';

interface NeighborhoodCardProps {
  match: NeighborhoodMatch;
  rank: number;
}

const NeighborhoodCard: React.FC<NeighborhoodCardProps> = ({ match, rank }) => {
  const { neighborhood, matchScore, matchReasons, topCategories } = match;

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600 bg-green-50';
    if (score >= 0.6) return 'text-blue-600 bg-blue-50';
    if (score >= 0.4) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getIconForCategory = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      affordability: <DollarSign size={16} />,
      walkability: <MapPin size={16} />,
      safety: <Shield size={16} />,
      noiseLevel: <Volume2 size={16} />,
      publicTransport: <Bus size={16} />,
      greenSpaces: <Trees size={16} />,
      nightlife: <Music size={16} />,
      familyFriendly: <Users size={16} />
    };
    return iconMap[category] || <MapPin size={16} />;
  };

  const formatCategoryName = (category: string) => {
    const nameMap: Record<string, string> = {
      affordability: 'Affordability',
      walkability: 'Walkability',
      safety: 'Safety',
      noiseLevel: 'Quiet Environment',
      publicTransport: 'Public Transport',
      greenSpaces: 'Green Spaces',
      nightlife: 'Nightlife',
      familyFriendly: 'Family-Friendly'
    };
    return nameMap[category] || category;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center font-bold">
              #{rank}
            </div>
            <div>
              <h3 className="text-xl font-bold">{neighborhood.name}</h3>
              <p className="text-blue-100 flex items-center">
                <MapPin size={16} className="mr-1" />
                {neighborhood.city}, {neighborhood.state}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(matchScore)}`}>
            {Math.round(matchScore * 100)}% Match
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {neighborhood.details.description}
        </p>

        {/* Match Reasons */}
        {matchReasons.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Why it matches:</h4>
            <div className="flex flex-wrap gap-2">
              {matchReasons.map((reason, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {reason}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Top Categories */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Top matching categories:</h4>
          <div className="space-y-2">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-gray-500">
                    {getIconForCategory(category.category)}
                  </div>
                  <span className="text-sm text-gray-700">
                    {formatCategoryName(category.category)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-gray-600">
                    Your preference: {category.userPreference}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    Score: {category.score}/5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {neighborhood.details.keyFeatures.map((feature, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              ₹{neighborhood.details.averageRent.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Average Rent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {neighborhood.details.walkScore}
            </div>
            <div className="text-sm text-gray-600">Walk Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodCard;