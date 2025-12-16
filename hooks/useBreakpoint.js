/**
 * useBreakpoint Hook
 * Responsive breakpoints hook
 */

import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const breakpoints = {
  small: 375,
  medium: 768,
  large: 1024,
};

/**
 * Hook to get current breakpoint based on screen width
 * @returns {string} Current breakpoint ('small', 'medium', 'large')
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('small');

  useEffect(() => {
    const updateBreakpoint = () => {
      const { width } = Dimensions.get('window');
      
      if (width >= breakpoints.large) {
        setBreakpoint('large');
      } else if (width >= breakpoints.medium) {
        setBreakpoint('medium');
      } else {
        setBreakpoint('small');
      }
    };

    updateBreakpoint();
    const subscription = Dimensions.addEventListener('change', updateBreakpoint);

    return () => subscription?.remove();
  }, []);

  return breakpoint;
};

export default useBreakpoint;

