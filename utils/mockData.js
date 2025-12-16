/**
 * Mock Data
 * Mock data for development before API is ready
 */

export const mockEvents = [
  {
    _id: 'event1',
    name: 'Nostalgia Room',
    start_date: new Date().toISOString(), // Current time for live event
    end_date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    venueId: {
      _id: 'venue1',
      name: 'Circus Bar',
      address: '123 Collins St, Melbourne VIC 3000',
    },
    banner_image_url:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    ticket_type: 'VIP Access',
    ticket_price: 5,
    tags: [
      { _id: 'tag1', tag: 'Hip Hop' },
      { _id: 'tag2', tag: 'RNB' },
      { _id: 'tag3', tag: 'Soul' },
    ],
    plus_ones: 2,
    isLive: true,
  },
  {
    _id: 'event2',
    name: 'BOILER ROOM SYDNEY AFTER PARTY',
    start_date: '2025-12-25T22:00:00Z',
    end_date: '2025-12-26T02:00:00Z',
    venueId: {
      _id: 'venue2',
      name: 'Chinese Laundry',
      address: '111 Darlinghurst Rd, Sydney NSW 2010',
    },
    banner_image_url:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    ticket_type: 'General Admission',
    ticket_price: 20,
    tags: [
      { _id: 'tag4', tag: 'Electronic' },
      { _id: 'tag5', tag: 'Techno' },
    ],
    plus_ones: 1,
  },
];

export const mockPlusOnes = [
  {
    _id: 'plusone1',
    first_name: 'John',
    last_name: 'Doe',
    phone: '+61 400 000 000',
    invited_at: '2025-12-01T10:00:00Z',
  },
  // Add more mock plus ones as needed
];

// Message threads (grouped by event)
export const mockMessageThreads = [
  {
    _id: 'thread1',
    eventId: 'event1',
    eventName: 'Nostalgia Room',
    venueName: 'Circus Bar',
    lastMessage: {
      _id: 'msg1',
      msg: "Hey guys, if you get to the door before 10pm we're handing out 1 free drink card",
      sent_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    },
    unreadCount: 1,
    hasMessages: true,
  },
  {
    _id: 'thread2',
    eventId: 'event2',
    eventName: 'BOILER ROOM SYDNEY AFTER PARTY',
    venueName: 'Chinese Laundry',
    lastMessage: null,
    unreadCount: 0,
    hasMessages: false,
    lastActivity: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
  },
];

export const mockMessages = [
  {
    _id: 'message1',
    title: 'Event Update',
    msg: 'We have added extra parking spaces for VIP guests.',
    sent_at: '2025-12-15T14:30:00Z',
    read: false,
  },
  // Add more mock messages as needed
];

export const mockTicket = {
  _id: 'ticket1',
  eventId: 'event1',
  ticket_number: 'TKT-12345',
  qr_code_data: 'event1-guest1',
  // Add more ticket fields as needed
};
