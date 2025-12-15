import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Button = ({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading,
  disabled,
  fullWidth,
  style,
}) => {
  const isDisabled = disabled || loading;

  const getStyles = () => {
    const base = {
      bg: '#0D7AC7',
      text: '#fff',
    };

    switch (variant) {
      case 'secondary':
        return { bg: 'rgba(13,122,199,0.15)', text: '#0D7AC7' };
      case 'outline':
        return { bg: 'transparent', text: 'rgba(255,255,255,0.7)', border: 'rgba(255,255,255,0.15)' };
      case 'success':
        return { bg: '#3CA259', text: '#fff' };
      case 'danger':
        return { bg: '#ff6b6b', text: '#fff' };
      default:
        return base;
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'sm': return { h: 12, v: 8, font: 13, icon: 12 };
      case 'lg': return { h: 24, v: 16, font: 16, icon: 16 };
      default: return { h: 16, v: 12, font: 14, icon: 14 };
    }
  };

  const s = getStyles();
  const p = getPadding();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: isDisabled ? `${s.bg}80` : s.bg,
          paddingHorizontal: p.h,
          paddingVertical: p.v,
          borderWidth: variant === 'outline' ? 1.5 : 0,
          borderColor: s.border,
          opacity: isDisabled ? 0.6 : 1,
        },
        fullWidth && { width: '100%' },
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size="small" color={s.text} />
      ) : (
        <View style={styles.content}>
          {icon && <FontAwesomeIcon icon={icon} size={p.icon} color={s.text} style={{ marginRight: 8 }} />}
          <Text style={[styles.label, { fontSize: p.font, color: s.text }]}>{label}</Text>
          {iconRight && <FontAwesomeIcon icon={iconRight} size={p.icon} color={s.text} style={{ marginLeft: 8 }} />}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Doner-RegularText',
    fontWeight: '600',
  },
});

export default Button;