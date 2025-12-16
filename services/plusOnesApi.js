/**
 * Plus Ones API
 * API functions for plus ones management
 */

import apiClient from './api';

/**
 * Get plus ones list for an event
 * @param {string} eventId - Event ID
 * @returns {Promise} Plus ones array
 */
export const getPlusOnes = async (eventId) => {
  return apiClient.get(`/api/mobile/guestiis/events/${eventId}/plus-ones`);
};

/**
 * Invite a plus one
 * @param {string} eventId - Event ID
 * @param {Object} data - Plus one data (first_name, last_name, phone?)
 * @returns {Promise} Created plus one object
 */
export const invitePlusOne = async (eventId, data) => {
  return apiClient.post(`/api/mobile/guestiis/events/${eventId}/plus-ones`, data);
};

/**
 * Remove a plus one
 * @param {string} eventId - Event ID
 * @param {string} id - Plus one ID
 * @returns {Promise} Success response
 */
export const removePlusOne = async (eventId, id) => {
  return apiClient.delete(`/api/mobile/guestiis/events/${eventId}/plus-ones/${id}`);
};

