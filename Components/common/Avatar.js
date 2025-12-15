import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Avatar = ({ imageUrl, firstName, lastName, size = 44, variant = 'accent' }) => {
  const getInitials = () => {
    const f = firstName?.charAt(0) || '';
    const l = lastName?.charAt(0) || '';
    return `${f}${l}`.toUpperCase() || '?';
  };

  const getVariant = () => {
    switch (variant) {
      case 'success':
        return { bg: 'rgba(60,162,89,0.12)', text: '#3CA259' };
      case 'neutral':
        return { bg: 'rgba(255,255,255,0.08)', text: 'rgba(255,255,255,0.6)' };
      default:
        return { bg: 'rgba(13,122,199,0.12)', text: '#0D7AC7' };
    }
  };

  const v = getVariant();
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: 12,
    backgroundColor: v.bg,
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (imageUrl) {
    return (
      <View style={containerStyle}>
        <Image source={{ uri: imageUrl }} style={[styles.image, { borderRadius: 12 }]} />
      </View>
    );
  }

  if (firstName || lastName) {
    return (
      <View style={containerStyle}>
        <Text style={[styles.initials, { color: v.text, fontSize: size * 0.35 }]}>{getInitials()}</Text>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <FontAwesomeIcon icon="fa-solid fa-user" size={size * 0.4} color={v.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  initials: {
    fontFamily: 'Doner-RegularText',
    fontWeight: '600',
  },
});

export default Avatar;