import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ children, onPress, variant = 'default', padding = 16, style }) => {
  const getVariant = () => {
    switch (variant) {
      case 'selected':
        return { bg: 'rgba(13,122,199,0.08)', border: '#0D7AC7' };
      case 'success':
        return { bg: 'rgba(60,162,89,0.05)', border: 'rgba(60,162,89,0.12)' };
      case 'error':
        return { bg: 'rgba(255,107,107,0.05)', border: 'rgba(255,107,107,0.12)' };
      default:
        return { bg: '#161824', border: 'rgba(255,255,255,0.04)' };
    }
  };

  const v = getVariant();
  const cardStyle = [styles.card, { backgroundColor: v.bg, borderColor: v.border, padding }, style];

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress} activeOpacity={0.7}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
  },
});

export default Card;