import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  icon,
  error,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  multiline,
  numberOfLines,
  editable = true,
  style,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[
        styles.inputWrap,
        focused && styles.inputFocused,
        error && styles.inputError,
        !editable && styles.inputDisabled,
      ]}>
        {icon && (
          <FontAwesomeIcon 
            icon={icon} 
            size={14} 
            color={focused ? '#0D7AC7' : 'rgba(255,255,255,0.3)'} 
            style={{ marginRight: 10 }}
          />
        )}
        <TextInput
          style={[styles.input, multiline && { textAlignVertical: 'top', paddingTop: 14 }]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.3)"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Doner-RegularText',
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 16,
  },
  inputFocused: {
    borderColor: 'rgba(13,122,199,0.5)',
    backgroundColor: 'rgba(13,122,199,0.05)',
  },
  inputError: {
    borderColor: 'rgba(255,107,107,0.5)',
  },
  inputDisabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    fontFamily: 'Doner-RegularText',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 14,
  },
  error: {
    fontFamily: 'Doner-RegularText',
    fontSize: 12,
    color: '#ff6b6b',
    marginTop: 6,
  },
});

export default Input;