/**
 * useAnimation Hook
 * Common animation hooks using React Native Reanimated
 */

import { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

/**
 * Hook for fade in animation
 * @param {number} duration - Animation duration in ms
 * @returns {Object} Animation values and functions
 */
export const useFadeIn = (duration = 300) => {
  const opacity = useSharedValue(0);

  const fadeIn = () => {
    opacity.value = withTiming(1, { duration });
  };

  const fadeOut = () => {
    opacity.value = withTiming(0, { duration });
  };

  return { opacity, fadeIn, fadeOut };
};

/**
 * Hook for scale animation
 * @param {number} initialScale - Initial scale value
 * @returns {Object} Animation values and functions
 */
export const useScale = (initialScale = 1) => {
  const scale = useSharedValue(initialScale);

  const scaleUp = (toValue = 1.1) => {
    scale.value = withSpring(toValue);
  };

  const scaleDown = (toValue = 1) => {
    scale.value = withSpring(toValue);
  };

  return { scale, scaleUp, scaleDown };
};

/**
 * Hook for slide animation
 * @param {number} initialX - Initial X position
 * @param {number} initialY - Initial Y position
 * @returns {Object} Animation values and functions
 */
export const useSlide = (initialX = 0, initialY = 0) => {
  const translateX = useSharedValue(initialX);
  const translateY = useSharedValue(initialY);

  const slideTo = (x, y, duration = 300) => {
    translateX.value = withTiming(x, { duration });
    translateY.value = withTiming(y, { duration });
  };

  const slideBack = () => {
    translateX.value = withTiming(initialX, { duration: 300 });
    translateY.value = withTiming(initialY, { duration: 300 });
  };

  return { translateX, translateY, slideTo, slideBack };
};

export default {
  useFadeIn,
  useScale,
  useSlide,
};

