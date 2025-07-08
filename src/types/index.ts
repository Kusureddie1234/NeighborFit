export interface UserPreferences {
  affordability: number;
  walkability: number;
  safety: number;
  noiseLevel: number;
  publicTransport: number;
  greenSpaces: number;
  nightlife: number;
  familyFriendly: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  scores: {
    affordability: number;
    walkability: number;
    safety: number;
    noiseLevel: number;
    publicTransport: number;
    greenSpaces: number;
    nightlife: number;
    familyFriendly: number;
  };
  details: {
    averageRent: number;
    crimeRate: number;
    walkScore: number;
    transitScore: number;
    description: string;
    keyFeatures: string[];
    demographics: {
      averageAge: number;
      familyPercentage: number;
      studentPercentage: number;
    };
  };
}

export interface NeighborhoodMatch {
  neighborhood: Neighborhood;
  matchScore: number;
  matchReasons: string[];
  topCategories: Array<{
    category: string;
    score: number;
    userPreference: number;
  }>;
}

export interface MatchingWeights {
  affordability: number;
  walkability: number;
  safety: number;
  noiseLevel: number;
  publicTransport: number;
  greenSpaces: number;
  nightlife: number;
  familyFriendly: number;
}