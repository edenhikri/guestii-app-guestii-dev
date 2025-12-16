/**
 * Events API
 * API functions for events
 */

import apiClient from './api';

/**
 * Get all events for logged-in guest
 * @returns {Promise} Events array
 */
export const getAllEvents = async () => {
  return apiClient.get('/api/mobile/guestiis/events');
};

/**
 * Get single event details
 * @param {string} eventId - Event ID
 * @returns {Promise} Event object
 */
export const getEventById = async (eventId) => {
  return apiClient.get(`/api/mobile/guestiis/events/${eventId}`);
};

