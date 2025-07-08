import React, { useState } from 'react';
import { DollarSign, MapPin, Shield, Volume2, Bus, Trees, Music, Users, Search, RotateCcw } from 'lucide-react';
import { UserPreferences } from '../types';
import PreferenceSlider from './PreferenceSlider';

interface PreferenceFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading?: boolean;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit, isLoading = false }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    affordability: 3,
    walkability: 3,
    safety: 4,
    noiseLevel: 3,
    publicTransport: 3,
    greenSpaces: 3,
    nightlife: 2,
    familyFriendly: 3
  });

  const handlePreferenceChange = (key: keyof UserPreferences, value: number) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const handleReset = () => {
    setPreferences({
      affordability: 0,
      walkability: 0,
      safety: 0,
      noiseLevel: 0,
      publicTransport: 0,
      greenSpaces: 0,
      nightlife: 0,
      familyFriendly: 0
    });
  };

  const preferenceConfig = [
    {
      key: 'affordability' as keyof UserPreferences,
      label: 'Affordability',
      description: 'How important is low cost of living and housing?',
      icon: <DollarSign size={20} />
    },
    {
      key: 'walkability' as keyof UserPreferences,
      label: 'Walkability',
      description: 'How important is it to walk to daily destinations?',
      icon: <MapPin size={20} />
    },
    {
      key: 'safety' as keyof UserPreferences,
      label: 'Safety',
      description: 'How important is low crime and feeling secure?',
      icon: <Shield size={20} />
    },
    {
      key: 'noiseLevel' as keyof UserPreferences,
      label: 'Quiet Environment',
      description: 'How important is a peaceful, low-noise environment?',
      icon: <Volume2 size={20} />
    },
    {
      key: 'publicTransport' as keyof UserPreferences,
      label: 'Public Transport',
      description: 'How important is access to buses, trains, and transit?',
      icon: <Bus size={20} />
    },
    {
      key: 'greenSpaces' as keyof UserPreferences,
      label: 'Green Spaces',
      description: 'How important are parks, gardens, and natural areas?',
      icon: <Trees size={20} />
    },
    {
      key: 'nightlife' as keyof UserPreferences,
      label: 'Nightlife',
      description: 'How important are bars, clubs, and evening entertainment?',
      icon: <Music size={20} />
    },
    {
      key: 'familyFriendly' as keyof UserPreferences,
      label: 'Family-Friendly',
      description: 'How important are schools, playgrounds, and family activities?',
      icon: <Users size={20} />
    }
  ];

  const totalPreferences = Object.values(preferences).filter(pref => pref > 0).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Tell us about your lifestyle preferences</h2>
          <p className="text-blue-100">
            Rate each factor from 0 (not important) to 5 (essential) to find your perfect neighborhood match.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {preferenceConfig.map((config) => (
              <PreferenceSlider
                key={config.key}
                label={config.label}
                value={preferences[config.key]}
                onChange={(value) => handlePreferenceChange(config.key, value)}
                description={config.description}
                icon={config.icon}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {totalPreferences} of 8 preferences set
              </span>
              <span>
                Average preference: {totalPreferences > 0 ? 
                  (Object.values(preferences).reduce((sum, val) => sum + val, 0) / totalPreferences).toFixed(1) : 
                  '0.0'
                }
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <RotateCcw size={16} />
              <span>Reset All</span>
            </button>
            
            <button
              type="submit"
              disabled={isLoading || totalPreferences === 0}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Finding Matches...</span>
                </>
              ) : (
                <>
                  <Search size={16} />
                  <span>Find My Neighborhoods</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreferenceForm;