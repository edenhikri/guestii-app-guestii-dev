# Guestiis – Guest Experience Module

> **React Native Development Sandbox**  
> This repository is **not connected to the production codebase**.  
> It's a dedicated space for developing and prototyping the **Guestiis** guest-facing section of the Guestii app.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [API Reference](#api-reference)
5. [Frontend Component Example](#code-example)


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
| **React Native (javascript)** | Cross-platform mobile framework |
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

### Frontend Component Example
```javascript
const GuestCard = React.memo(({ guest, onPress, onLongPress, onSelect, isSelected, selectionMode, styles, index }) => {
  const done = guest.payment_status === 'completed';

  const handlePress = () => {
    if (selectionMode && !done) {
      onSelect(guest)
    } else if (!done) {
      onPress(guest)
    }
  }

  return (
    <FadeIn delay={index * 30} style={styles.cardWrapper}>
      <TouchableOpacity
        style={[styles.card, done && styles.cardDone, isSelected && styles.cardSelected]}
        onPress={handlePress}
        onLongPress={() => !done && onLongPress(guest)}
        activeOpacity={done ? 1 : 0.7}
        disabled={done}
        delayLongPress={300}
      >
        {selectionMode && !done && (
          <View style={[styles.cardCheckbox, isSelected && styles.cardCheckboxActive]}>
            {isSelected && <FontAwesomeIcon icon="fa-solid fa-check" size={12} color="#fff" />}
          </View>
        )}

        <View style={[styles.cardAvatar, done ? styles.avatarDone : styles.avatarPending]}>
          <Text style={[styles.avatarText, done ? styles.avatarTextDone : styles.avatarTextPending]}>{getInitials(guest.first_name, guest.last_name)}</Text>
        </View>

        <View style={styles.cardBody}>
          <Text style={styles.cardName} numberOfLines={1}>{guest.first_name} {guest.last_name}</Text>
          <View style={styles.cardMeta}>
            <Text style={styles.cardTime}>{getTimeAgo(guest.admitted_date)}</Text>
            
            {guest.ticket_type && (
              <>
                <View style={styles.metaDot}/>
                <Text style={styles.cardTicket}>{guest.ticket_type}</Text>
              </>
            )}
          </View>
        </View>

        {done ? (
          <View style={styles.cardRightDone}>
            {guest.ticket_price > 0 && <Text style={styles.cardPriceDone}>${guest.ticket_price}</Text>}
            
            <View style={styles.checkBadge}>
              <FontAwesomeIcon icon="fa-solid fa-check" size={14} color="#49b283" />
            </View>
          </View>
        ) : (
          <View style={styles.cardRight}>
            {guest.ticket_price > 0 && <Text style={styles.cardPrice}>${guest.ticket_price}</Text>}
            
            {!selectionMode && (
              <View style={styles.arrowBadge}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" size={12} color="#fff" />
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
    </FadeIn>
  );
});
```

### Mock Data Example

```javascript
// utils/mockData.js

export const mockEvents = [
  {
    _id: 'OBJECT_ID',
    name: 'Summer Rooftop Party',
    start_date: '2025-12-21T20:00:00Z',
    end_date: '2025-12-21T22:00:00Z',
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
    phone: '+61 400 000 000', // if it was added. they can also invite just names
    invited_at: '2025-12-01T10:00:00Z'
  },
  // ... more plus ones
];

export const mockMessages = [
  {
    _id: 'OBJECT_ID',
    title: 'Event Update',
    msg: 'We have added extra parking spaces for VIP guests.',
    sent_at: '2025-12-15T14:30:00Z'
  },
  // ... more messages
];
```

---

## Assets:

Mockup app UI - https://guestii-nightlife-at-pqao.bolt.host/

![Verification tick](https://github.com/user-attachments/assets/50a21281-bffb-4e21-90c8-77a82b8f5754)[Uploading Alias-Bold.otf…]()

<img width="1920" height="1080" alt="Guestii logo png" src="https://github.com/user-attachments/assets/29b82032-6d16-409c-b729-6de6883ab583" />

<img width="1920" height="1080" alt="guestii logo png white" src="https://github.com/user-attachments/assets/67743dd1-104a-4587-954c-12ab9bbd5c95" />

[guestii app assests.zip](https://github.com/user-attachments/files/24159900/guestii.app.assests.zip)  << fonts can be found here as well as other assests

PROMOTER APP EXISTING LOOK:

![WhatsApp Image 2025-12-15 at 13 39 58_cd5f486e](https://github.com/user-attachments/assets/34561734-8ad2-4b57-ba33-c7a9cc109ba6)
![WhatsApp Image 2025-12-15 at 13 39 58_533f0b98](https://github.com/user-attachments/assets/6e164890-65c4-4488-a15e-c4a75540089c)
![WhatsApp Image 2025-12-15 at 13 39 58_6347874e](https://github.com/user-attachments/assets/ae7b75bc-9f17-45b0-8aa9-2c2ab65a5c42)






## 📞 Questions?

If you're unsure about anything, please ask before implementing. We'd rather clarify upfront than refactor later.

**Good luck!** 🚀
