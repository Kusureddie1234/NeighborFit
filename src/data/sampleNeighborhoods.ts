import { Neighborhood } from '../types';

export const sampleNeighborhoods: Neighborhood[] = [
  {
    id: '1',
    name: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9352, lng: 77.6245 },
    scores: {
      affordability: 3,
      walkability: 4,
      safety: 4,
      noiseLevel: 3,
      publicTransport: 4,
      greenSpaces: 3,
      nightlife: 5,
      familyFriendly: 4
    },
    details: {
      averageRent: 25000,
      crimeRate: 2.1,
      walkScore: 78,
      transitScore: 85,
      description: 'Tech hub with numerous startups, cafes, and restaurants. Popular among young professionals and entrepreneurs.',
      keyFeatures: ['Startup ecosystem', 'Forum Mall', 'Vibrant nightlife', 'Co-working spaces', 'Metro connectivity'],
      demographics: {
        averageAge: 28,
        familyPercentage: 35,
        studentPercentage: 25
      }
    }
  },
  {
    id: '2',
    name: 'Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9719, lng: 77.6412 },
    scores: {
      affordability: 3,
      walkability: 5,
      safety: 4,
      noiseLevel: 3,
      publicTransport: 5,
      greenSpaces: 4,
      nightlife: 5,
      familyFriendly: 4
    },
    details: {
      averageRent: 28000,
      crimeRate: 1.8,
      walkScore: 88,
      transitScore: 92,
      description: 'Upscale neighborhood known for its pubs, restaurants, and shopping. Metro connectivity makes it highly accessible.',
      keyFeatures: ['100 Feet Road', 'Metro station', 'Pubs and breweries', 'Shopping complexes', 'Tree-lined streets'],
      demographics: {
        averageAge: 30,
        familyPercentage: 40,
        studentPercentage: 20
      }
    }
  },
  {
    id: '3',
    name: 'Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9698, lng: 77.7500 },
    scores: {
      affordability: 4,
      walkability: 3,
      safety: 4,
      noiseLevel: 4,
      publicTransport: 3,
      greenSpaces: 4,
      nightlife: 3,
      familyFriendly: 5
    },
    details: {
      averageRent: 22000,
      crimeRate: 1.5,
      walkScore: 65,
      transitScore: 70,
      description: 'IT corridor with major tech companies. Family-friendly with good schools and peaceful environment.',
      keyFeatures: ['IT companies', 'International schools', 'Phoenix MarketCity', 'Gated communities', 'Less traffic'],
      demographics: {
        averageAge: 32,
        familyPercentage: 55,
        studentPercentage: 15
      }
    }
  },
  {
    id: '4',
    name: 'HSR Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9116, lng: 77.6473 },
    scores: {
      affordability: 4,
      walkability: 4,
      safety: 5,
      noiseLevel: 4,
      publicTransport: 4,
      greenSpaces: 4,
      nightlife: 3,
      familyFriendly: 5
    },
    details: {
      averageRent: 24000,
      crimeRate: 1.2,
      walkScore: 82,
      transitScore: 78,
      description: 'Well-planned residential area with wide roads, parks, and family-oriented amenities. Very safe and organized.',
      keyFeatures: ['Wide roads', 'Sector-wise planning', 'Good schools', 'Parks and playgrounds', 'Shopping areas'],
      demographics: {
        averageAge: 34,
        familyPercentage: 60,
        studentPercentage: 12
      }
    }
  },
  {
    id: '5',
    name: 'BTM Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9166, lng: 77.6101 },
    scores: {
      affordability: 4,
      walkability: 4,
      safety: 4,
      noiseLevel: 3,
      publicTransport: 4,
      greenSpaces: 3,
      nightlife: 4,
      familyFriendly: 4
    },
    details: {
      averageRent: 20000,
      crimeRate: 2.0,
      walkScore: 75,
      transitScore: 80,
      description: 'Affordable neighborhood with good connectivity. Mix of residential and commercial areas with decent amenities.',
      keyFeatures: ['Affordable housing', 'Good bus connectivity', 'Local markets', 'Restaurants', 'Central location'],
      demographics: {
        averageAge: 29,
        familyPercentage: 45,
        studentPercentage: 22
      }
    }
  },
  {
    id: '6',
    name: 'Jayanagar',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9279, lng: 77.5837 },
    scores: {
      affordability: 4,
      walkability: 5,
      safety: 5,
      noiseLevel: 4,
      publicTransport: 4,
      greenSpaces: 5,
      nightlife: 2,
      familyFriendly: 5
    },
    details: {
      averageRent: 23000,
      crimeRate: 1.0,
      walkScore: 90,
      transitScore: 85,
      description: 'Traditional Bangalore neighborhood with tree-lined streets, parks, and strong community feel. Very family-friendly.',
      keyFeatures: ['Lalbagh nearby', 'Traditional markets', 'Tree-lined streets', 'Community parks', 'Cultural centers'],
      demographics: {
        averageAge: 38,
        familyPercentage: 65,
        studentPercentage: 10
      }
    }
  },
  {
    id: '7',
    name: 'Electronic City',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.8456, lng: 77.6603 },
    scores: {
      affordability: 5,
      walkability: 2,
      safety: 4,
      noiseLevel: 4,
      publicTransport: 3,
      greenSpaces: 3,
      nightlife: 2,
      familyFriendly: 4
    },
    details: {
      averageRent: 18000,
      crimeRate: 1.8,
      walkScore: 55,
      transitScore: 65,
      description: 'Major IT hub with affordable housing options. Good for tech professionals working in the area.',
      keyFeatures: ['IT companies', 'Affordable rent', 'New developments', 'Less crowded', 'Good infrastructure'],
      demographics: {
        averageAge: 27,
        familyPercentage: 40,
        studentPercentage: 25
      }
    }
  },
  {
    id: '8',
    name: 'Malleshwaram',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 13.0067, lng: 77.5667 },
    scores: {
      affordability: 4,
      walkability: 5,
      safety: 5,
      noiseLevel: 4,
      publicTransport: 5,
      greenSpaces: 4,
      nightlife: 2,
      familyFriendly: 5
    },
    details: {
      averageRent: 26000,
      crimeRate: 0.8,
      walkScore: 92,
      transitScore: 88,
      description: 'Heritage neighborhood with traditional charm, excellent walkability, and strong cultural roots.',
      keyFeatures: ['Traditional architecture', 'Sampige Road', 'Cultural heritage', 'Metro connectivity', 'Local temples'],
      demographics: {
        averageAge: 42,
        familyPercentage: 70,
        studentPercentage: 8
      }
    }
  },
  {
    id: '9',
    name: 'Banashankari',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 12.9249, lng: 77.5571 },
    scores: {
      affordability: 5,
      walkability: 4,
      safety: 4,
      noiseLevel: 4,
      publicTransport: 4,
      greenSpaces: 4,
      nightlife: 3,
      familyFriendly: 5
    },
    details: {
      averageRent: 19000,
      crimeRate: 1.5,
      walkScore: 80,
      transitScore: 82,
      description: 'Affordable residential area with good amenities and connectivity. Popular among middle-class families.',
      keyFeatures: ['Metro station', 'Affordable housing', 'Good schools', 'Local markets', 'Temples'],
      demographics: {
        averageAge: 35,
        familyPercentage: 58,
        studentPercentage: 15
      }
    }
  },
  {
    id: '10',
    name: 'Hebbal',
    city: 'Bangalore',
    state: 'Karnataka',
    coordinates: { lat: 13.0358, lng: 77.5970 },
    scores: {
      affordability: 4,
      walkability: 3,
      safety: 4,
      noiseLevel: 3,
      publicTransport: 3,
      greenSpaces: 5,
      nightlife: 3,
      familyFriendly: 4
    },
    details: {
      averageRent: 21000,
      crimeRate: 2.2,
      walkScore: 68,
      transitScore: 72,
      description: 'Growing area with good connectivity to airport and IT corridors. Close to Hebbal Lake and green spaces.',
      keyFeatures: ['Airport connectivity', 'Hebbal Lake', 'IT corridor access', 'New developments', 'Outer Ring Road'],
      demographics: {
        averageAge: 31,
        familyPercentage: 48,
        studentPercentage: 18
      }
    }
  }
];