/**
 * Common Style Patterns
 * Shared style patterns and utilities
 */

import { StyleSheet } from 'react-native';
import colors from './colors';
import spacing from './spacing';

const commonStyles = StyleSheet.create({
  // Shadows
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  
  // Borders
  border: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  borderLight: {
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  
  // Container
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  // Centered content
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Row layout
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // Space between
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default commonStyles;

