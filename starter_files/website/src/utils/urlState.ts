/**
 * URL state management utilities for filter synchronization
 */

/**
 * Parse a comma-separated URL parameter into an array of strings
 */
export const parseArrayParam = (param: string | null): string[] => {
  if (!param) return [];
  return param
    .split(',')
    .map(item => decodeURIComponent(item.trim()))
    .filter(item => item.length > 0);
};

/**
 * Convert an array of strings to a comma-separated URL parameter
 */
export const stringifyArrayParam = (arr: string[]): string => {
  return arr.map(item => encodeURIComponent(item)).join(',');
};

export interface FilterState {
  search: string;
  day: string;
  category: string;
  speakers: string[];
  level: string;
  tracks: string[];
}

/**
 * Parse all filter parameters from URLSearchParams
 */
export const parseFiltersFromURL = (searchParams: URLSearchParams): FilterState => {
  return {
    search: searchParams.get('search') || '',
    day: searchParams.get('day') || 'All',
    category: searchParams.get('category') || 'All',
    speakers: parseArrayParam(searchParams.get('speakers')),
    level: searchParams.get('level') || 'All',
    tracks: parseArrayParam(searchParams.get('tracks')),
  };
};

/**
 * Build URLSearchParams from filter state
 */
export const buildURLFromFilters = (filters: FilterState): URLSearchParams => {
  const params = new URLSearchParams();

  if (filters.search) {
    params.set('search', filters.search);
  }

  if (filters.day !== 'All') {
    params.set('day', filters.day);
  }

  if (filters.category !== 'All') {
    params.set('category', filters.category);
  }

  if (filters.speakers.length > 0) {
    params.set('speakers', stringifyArrayParam(filters.speakers));
  }

  if (filters.level !== 'All') {
    params.set('level', filters.level);
  }

  if (filters.tracks.length > 0) {
    params.set('tracks', stringifyArrayParam(filters.tracks));
  }

  return params;
};
