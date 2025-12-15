import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ label, variant = 'default', showDot = true, color, style }) => {
  const getVariant = () => {
    if (color) {
      return { main: color, bg: `${color}20`, border: `${color}40` };
    }
    switch (variant) {
      case 'success':
        return { main: '#3CA259', bg: 'rgba(60,162,89,0.15)', border: 'rgba(60,162,89,0.25)' };
      case 'warning':
        return { main: '#ffb347', bg: 'rgba(255,179,71,0.15)', border: 'rgba(255,179,71,0.25)' };
      case 'error':
        return { main: '#ff6b6b', bg: 'rgba(255,107,107,0.15)', border: 'rgba(255,107,107,0.25)' };
      case 'accent':
        return { main: '#0D7AC7', bg: 'rgba(13,122,199,0.15)', border: 'rgba(13,122,199,0.25)' };
      default:
        return { main: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.08)' };
    }
  };

  const v = getVariant();

  return (
    <View style={[styles.badge, { backgroundColor: v.bg, borderColor: v.border }, style]}>
      {showDot && <View style={[styles.dot, { backgroundColor: v.main }]} />}
      <Text style={[styles.label, { color: v.main }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontFamily: 'Doner-RegularText',
    fontSize: 13,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});

export default Badge;