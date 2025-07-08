import React, { useState } from 'react';
import { MapPin, Home, Star } from 'lucide-react';
import { UserPreferences, NeighborhoodMatch } from './types';
import { findNeighborhoodMatches, validatePreferences } from './utils/matchingAlgorithm';
import { sampleNeighborhoods } from './data/sampleNeighborhoods';
import PreferenceForm from './components/PreferenceForm';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  const [currentStep, setCurrentStep] = useState<'form' | 'results'>('form');
  const [matches, setMatches] = useState<NeighborhoodMatch[]>([]);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePreferenceSubmit = async (preferences: UserPreferences) => {
    if (!validatePreferences(preferences)) {
      alert('Please provide valid preferences (0-5 for each category)');
      return;
    }

    setIsLoading(true);
    setUserPreferences(preferences);

    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const matchedNeighborhoods = findNeighborhoodMatches(preferences, sampleNeighborhoods, 3);
      setMatches(matchedNeighborhoods);
      setCurrentStep('results');
    } catch (error) {
      console.error('Error finding matches:', error);
      alert('An error occurred while finding matches. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-2">
                <Home className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
                <p className="text-gray-600">Find your perfect neighborhood match</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>10 Cities</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star size={16} />
                <span>Smart Matching</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep === 'form' && (
          <div>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your Perfect Bangalore Neighborhood
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rate your lifestyle preferences and discover Bangalore neighborhoods that match your needs. 
                Built with React, TypeScript, and smart algorithms.
              </p>
            </div>

            <PreferenceForm onSubmit={handlePreferenceSubmit} isLoading={isLoading} />
          </div>
        )}

        {currentStep === 'results' && userPreferences && (
          <ResultsDisplay
            matches={matches}
            preferences={userPreferences}
            onBack={handleBackToForm}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              © 2025 NeighborFit Bangalore. Built for placement demonstration with real neighborhood data.
            </p>
            <p className="text-sm">
              Developed by [Your Name] - Full Stack Developer | React • TypeScript • Algorithms
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;