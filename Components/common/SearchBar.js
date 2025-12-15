import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const SearchBar = ({ value, onChangeText, placeholder = 'Search...', style }) => {
  return (
    <View style={[styles.container, style]}>
      <FontAwesomeIcon icon="fa-solid fa-search" size={14} color="rgba(255,255,255,0.3)" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.3)"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value?.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')} activeOpacity={0.7}>
          <FontAwesomeIcon icon="fa-solid fa-times-circle" size={16} color="rgba(255,255,255,0.3)" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)',
  },
  input: {
    flex: 1,
    fontFamily: 'Doner-RegularText',
    fontSize: 14,
    color: '#fff',
  },
});

export default SearchBar;