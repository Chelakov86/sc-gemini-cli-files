import { SESSIONS } from './sessions';

/**
 * Extract unique speakers from all sessions, sorted alphabetically
 */
export const UNIQUE_SPEAKERS = Array.from(
  new Set(SESSIONS.map(session => session.speaker))
).sort();

/**
 * Extract unique tracks from all sessions, sorted alphabetically
 */
export const UNIQUE_TRACKS = Array.from(
  new Set(SESSIONS.flatMap(session => session.details.tracks))
).sort();

/**
 * Available session levels
 */
export const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;
