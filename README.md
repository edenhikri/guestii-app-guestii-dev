# Guestiis – Guest Experience Module

> **React Native Development Sandbox**  
> This repository is **not connected to the production codebase**.  
> It's a dedicated space for developing and prototyping the **Guestiis** guest-facing section of the Guestii app.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Design System](#design-system)
5. [Core Modules](#core-modules)
6. [Component Specifications](#component-specifications)
7. [API Reference](#api-reference)
8. [Code Patterns & Examples](#code-patterns--examples)
9. [Best Practices](#best-practices)
10. [Submission Guidelines](#submission-guidelines)

---

## 🎯 Project Overview

**Guestiis** is the guest-facing section of the Guestii app where invited guests can:

- **View their event invitations** on a central Hub page
- **Access event details** including venue, time, tags, and more
- **Manage Plus Ones** – invite friends when they have available plus ones
- **View their ticket** with QR code for event entry
- **Receive messages** from event organisers

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native** | Cross-platform mobile framework |
| **React Navigation** | Navigation between screens |
| **React Native Reanimated** | Smooth animations |
| **FontAwesome** | Icon library |
| **Linear Gradient** | Gradient backgrounds |
| **Async Storage** | Local data persistence |
| **Anything else you would like or need** |

---

## 📁 Folder Structure

```
guestiis/
├── components/
│   ├── Hub/
│   │   ├── Hub.js                 # Main hub screen
│   │   ├── HubStyles.js           # Hub-specific styles
│   │   ├── EventCard.js           # Individual event card
│   │   └── index.js               # Exports
│   │
│   ├── EventDetail/
│   │   ├── EventDetail.js         # Event detail container
│   │   ├── EventDetailStyles.js   # Styles
│   │   ├── EventHeader.js         # Event hero/header section
│   │   ├── EventInfo.js           # Event information tab
│   │   └── index.js
│   │
│   ├── PlusOnes/
│   │   ├── PlusOnes.js            # Plus ones management
│   │   ├── PlusOnesStyles.js
│   │   ├── InviteModal.js         # Modal to invite a friend
│   │   ├── PlusOneCard.js         # Individual plus one display
│   │   └── index.js
│   │
│   ├── Ticket/
│   │   ├── Ticket.js              # Ticket display with QR
│   │   ├── TicketStyles.js
│   │   └── index.js
│   │
│   ├── Messages/
│   │   ├── Messages.js            # Messages list
│   │   ├── MessagesStyles.js
│   │   ├── MessageItem.js         # Individual message
│   │   └── index.js
│   │
│   └── common/
│       ├── Button.js              # Reusable button component
│       ├── Card.js                # Reusable card wrapper
│       ├── Badge.js               # Status badges
│       ├── Avatar.js              # User avatar component
│       ├── TabBar.js              # Tab navigation component
│       ├── EmptyState.js          # Empty state placeholder
│       ├── LoadingState.js        # Loading skeleton
│       └── index.js
│
├── styles/
│   ├── colors.js                  # Color palette
│   ├── spacing.js                 # Spacing constants
│   └── common.js                  # Shared style patterns
│
├── utils/
│   ├── formatters.js              # Date, time, currency formatters
│   ├── validators.js              # Input validation
│   └── helpers.js                 # Misc helper functions
│
├── hooks/
│   ├── useBreakpoint.js           # Responsive breakpoints
│   └── useAnimation.js            # Common animation hooks
│
├── context/
│   └── GuestContext.js            # Guest state management
│
├── assets/
│   ├── icons/                     # Custom SVG icons
│   └── images/                    # Static images
│
├── examples/                      # Example implementations
│   ├── ExampleEventCard.js
│   └── ExampleModal.js
│
└── README.md                      # This file
```

---

## 🔌 API Reference

> **Note:** These endpoints will be provided by the backend team.  
> Use mock data during development.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/mobile/guestiis/events` | Get all events for logged-in guest |
| GET | `/api/mobile/guestiis/events/:eventId` | Get single event details |
| GET | `/api/mobile/guestiis/events/:eventId/ticket` | Get ticket data with QR |
| GET | `/api/mobile/guestiis/events/:eventId/plus-ones` | Get plus ones list |
| POST | `/api/mobile/guestiis/events/:eventId/plus-ones` | Invite a plus one |
| DELETE | `/api/mobile/guestiis/events/:eventId/plus-ones/:id` | Remove plus one |
| GET | `/api/mobile/guestiis/events/:eventId/messages` | Get event messages |
| PUT | `/api/mobile/guestiis/messages/:id/read` | Mark message as read |

### Mock Data Example

```javascript
// utils/mockData.js

export const mockEvents = [
  {
    _id: 'OBJECT_ID',
    name: 'Summer Rooftop Party',
    start_date: '2024-12-21T20:00:00Z',
    end_date: '2024-12-21T22:00:00Z',
    venueId: { _id: "OBJECT_ID", name: 'Sky Lounge, Melbourne', address: '123 Collins St, Melbourne VIC 3000' },
    banner_image_url: 'https://example.com/event1.jpg',
    ticket_type: 'VIP Access',
    ticket_price: 5,
    tags: [{ _id: 'OBJECT_ID', tag: 'Smart Casual', color: '#ff33dd' }],
    plus_ones: 2,
  },
  // ... more events
];

export const mockPlusOnes = [
  {
    _id: 'OBJECT_ID',
    first_name: 'John',
    last_name: 'Doe',
    phone: '+61 400 000 000' // if it was added. they can also invite just names,
    invited_at: '2024-12-01T10:00:00Z',
  },
  // ... more plus ones
];

export const mockMessages = [
  {
    _id: 'OBJECT_ID',
    title: 'Event Update',
    msg: 'We have added extra parking spaces for VIP guests.',
    sent_at: '2024-12-15T14:30:00Z'
  },
  // ... more messages
];
```

---

## 📞 Questions?

If you're unsure about anything, please ask before implementing. We'd rather clarify upfront than refactor later.

**Good luck!** 🚀
