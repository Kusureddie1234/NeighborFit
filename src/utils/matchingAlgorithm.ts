import { UserPreferences, Neighborhood, NeighborhoodMatch, MatchingWeights } from '../types';

// Default weights for different preference categories
const DEFAULT_WEIGHTS: MatchingWeights = {
  affordability: 1.2,
  walkability: 1.0,
  safety: 1.3,
  noiseLevel: 0.8,
  publicTransport: 1.0,
  greenSpaces: 0.9,
  nightlife: 0.7,
  familyFriendly: 1.1
};

// Category display names and descriptions
const CATEGORY_LABELS: Record<keyof UserPreferences, string> = {
  affordability: 'Affordability',
  walkability: 'Walkability',
  safety: 'Safety',
  noiseLevel: 'Quiet Environment',
  publicTransport: 'Public Transport',
  greenSpaces: 'Green Spaces',
  nightlife: 'Nightlife',
  familyFriendly: 'Family-Friendly'
};

/**
 * Calculate similarity score between user preferences and neighborhood scores
 */
function calculateSimilarity(
  userPreferences: UserPreferences,
  neighborhoodScores: UserPreferences,
  weights: MatchingWeights = DEFAULT_WEIGHTS
): number {
  let totalScore = 0;
  let totalWeight = 0;

  // Calculate weighted similarity for each preference category
  Object.keys(userPreferences).forEach(key => {
    const prefKey = key as keyof UserPreferences;
    const userPref = userPreferences[prefKey];
    const neighborhoodScore = neighborhoodScores[prefKey];
    const weight = weights[prefKey];

    // Skip if user doesn't care about this preference (score = 0)
    if (userPref === 0) return;

    // Calculate similarity (inverse of absolute difference, normalized to 0-1)
    const difference = Math.abs(userPref - neighborhoodScore);
    const similarity = 1 - (difference / 5); // Max difference is 5
    
    totalScore += similarity * weight * userPref;
    totalWeight += weight * userPref;
  });

  // Return weighted average similarity score (0-1)
  return totalWeight > 0 ? totalScore / totalWeight : 0;
}

/**
 * Generate match reasons based on strongest alignments
 */
function generateMatchReasons(
  userPreferences: UserPreferences,
  neighborhoodScores: UserPreferences,
  topCategories: Array<{category: string; score: number; userPreference: number}>
): string[] {
  const reasons: string[] = [];

  topCategories.forEach(({ category, score, userPreference }) => {
    if (userPreference >= 4 && score >= 4) {
      reasons.push(`Excellent ${CATEGORY_LABELS[category as keyof UserPreferences].toLowerCase()}`);
    } else if (userPreference >= 3 && score >= 3) {
      reasons.push(`Good ${CATEGORY_LABELS[category as keyof UserPreferences].toLowerCase()}`);
    }
  });

  return reasons.slice(0, 3); // Return top 3 reasons
}

/**
 * Get top matching categories for a neighborhood
 */
function getTopCategories(
  userPreferences: UserPreferences,
  neighborhoodScores: UserPreferences
): Array<{category: string; score: number; userPreference: number}> {
  const categories = Object.keys(userPreferences).map(key => {
    const prefKey = key as keyof UserPreferences;
    return {
      category: prefKey,
      score: neighborhoodScores[prefKey],
      userPreference: userPreferences[prefKey],
      alignment: userPreferences[prefKey] > 0 ? 
        1 - Math.abs(userPreferences[prefKey] - neighborhoodScores[prefKey]) / 5 : 0
    };
  });

  return categories
    .filter(cat => cat.userPreference > 0)
    .sort((a, b) => b.alignment - a.alignment)
    .slice(0, 3)
    .map(({ category, score, userPreference }) => ({ category, score, userPreference }));
}

/**
 * Main matching function that finds best neighborhood matches
 */
export function findNeighborhoodMatches(
  userPreferences: UserPreferences,
  neighborhoods: Neighborhood[],
  topN: number = 3
): NeighborhoodMatch[] {
  // Validate inputs
  if (!userPreferences || !neighborhoods || neighborhoods.length === 0) {
    return [];
  }

  // Check if user has any preferences set
  const hasPreferences = Object.values(userPreferences).some(pref => pref > 0);
  if (!hasPreferences) {
    return [];
  }

  // Calculate matches for all neighborhoods
  const matches: NeighborhoodMatch[] = neighborhoods.map(neighborhood => {
    const matchScore = calculateSimilarity(userPreferences, neighborhood.scores);
    const topCategories = getTopCategories(userPreferences, neighborhood.scores);
    const matchReasons = generateMatchReasons(userPreferences, neighborhood.scores, topCategories);

    return {
      neighborhood,
      matchScore,
      matchReasons,
      topCategories
    };
  });

  // Sort by match score (descending) and return top N
  return matches
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, topN);
}

/**
 * Validate user preferences input
 */
export function validatePreferences(preferences: UserPreferences): boolean {
  return Object.values(preferences).every(pref => 
    typeof pref === 'number' && pref >= 0 && pref <= 5
  );
}

/**
 * Get preference statistics for analysis
 */
export function getPreferenceStats(preferences: UserPreferences) {
  const values = Object.values(preferences).filter(pref => pref > 0);
  
  if (values.length === 0) {
    return { average: 0, highest: 0, lowest: 0, totalPreferences: 0 };
  }

  return {
    average: values.reduce((sum, val) => sum + val, 0) / values.length,
    highest: Math.max(...values),
    lowest: Math.min(...values),
    totalPreferences: values.length
  };
}