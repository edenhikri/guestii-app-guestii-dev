/**
 * Guest Context
 * Global state management for guest data
 */

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GuestContext = createContext();

const initialState = {
  events: [],
  currentEvent: null,
  plusOnes: [],
  messages: [],
  ticket: null,
  loading: false,
  error: null,
};

const guestReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_EVENTS':
      return { ...state, events: action.payload, loading: false, error: null };
    
    case 'SET_CURRENT_EVENT':
      return { ...state, currentEvent: action.payload };
    
    case 'SET_PLUS_ONES':
      return { ...state, plusOnes: action.payload, loading: false };
    
    case 'ADD_PLUS_ONE':
      return { ...state, plusOnes: [...state.plusOnes, action.payload] };
    
    case 'REMOVE_PLUS_ONE':
      return {
        ...state,
        plusOnes: state.plusOnes.filter(po => po._id !== action.payload),
      };
    
    case 'SET_MESSAGES':
      return { ...state, messages: action.payload, loading: false };
    
    case 'MARK_MESSAGE_READ':
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg._id === action.payload ? { ...msg, read: true } : msg
        ),
      };
    
    case 'SET_TICKET':
      return { ...state, ticket: action.payload, loading: false };
    
    default:
      return state;
  }
};

export const GuestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(guestReducer, initialState);

  // Load persisted data on mount
  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const savedEvents = await AsyncStorage.getItem('guest_events');
        if (savedEvents) {
          dispatch({ type: 'SET_EVENTS', payload: JSON.parse(savedEvents) });
        }
      } catch (error) {
        console.error('Error loading persisted data:', error);
      }
    };

    loadPersistedData();
  }, []);

  // Persist events when they change
  useEffect(() => {
    if (state.events.length > 0) {
      AsyncStorage.setItem('guest_events', JSON.stringify(state.events));
    }
  }, [state.events]);

  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => {
  const context = useContext(GuestContext);
  if (!context) {
    throw new Error('useGuest must be used within GuestProvider');
  }
  return context;
};

export default GuestContext;

