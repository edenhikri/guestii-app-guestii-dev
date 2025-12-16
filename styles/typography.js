/**
 * Typography
 * Font sizes, weights, line heights
 */

const typography = {
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  
  // Font weights
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  // Font families (will be set up when custom fonts are added)
  fontFamily: {
    regular: 'System',
    bold: 'System',
    // TODO: Update when custom fonts are added
    // regular: 'Alias-Regular',
    // bold: 'Alias-Bold',
  },
};

export default typography;

