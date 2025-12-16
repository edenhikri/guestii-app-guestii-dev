/**
 * Ticket API
 * API functions for tickets
 */

import apiClient from './api';

/**
 * Get ticket data with QR code
 * @param {string} eventId - Event ID
 * @returns {Promise} Ticket object
 */
export const getTicket = async (eventId) => {
  return apiClient.get(`/api/mobile/guestiis/events/${eventId}/ticket`);
};

