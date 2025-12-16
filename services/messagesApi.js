/**
 * Messages API
 * API functions for messages
 */

import apiClient from './api';

/**
 * Get event messages
 * @param {string} eventId - Event ID
 * @returns {Promise} Messages array
 */
export const getMessages = async (eventId) => {
  return apiClient.get(`/api/mobile/guestiis/events/${eventId}/messages`);
};

/**
 * Mark message as read
 * @param {string} messageId - Message ID
 * @returns {Promise} Success response
 */
export const markAsRead = async (messageId) => {
  return apiClient.put(`/api/mobile/guestiis/messages/${messageId}/read`);
};

