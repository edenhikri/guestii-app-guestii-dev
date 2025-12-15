import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = ({ tabs, activeTab, onTabPress, style }) => {
  return (
    <View style={[styles.tabBar, style]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const isGreen = tab.color === 'green';

        return (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              isActive && (isGreen ? styles.tabActiveGreen : styles.tabActive),
            ]}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.tabText,
              isActive && (isGreen ? styles.tabTextActiveGreen : styles.tabTextActive),
            ]}>
              {tab.label}
            </Text>
            {tab.count !== undefined && (
              <View style={[
                styles.tabBadge,
                isActive && (isGreen ? styles.tabBadgeActiveGreen : styles.tabBadgeActive),
              ]}>
                <Text style={[
                  styles.tabBadgeText,
                  isActive && (isGreen ? styles.tabBadgeTextActiveGreen : styles.tabBadgeTextActive),
                ]}>
                  {tab.count}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    gap: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  tabActive: {
    backgroundColor: 'rgba(13,122,199,0.1)',
    borderColor: 'rgba(13,122,199,0.3)',
  },
  tabActiveGreen: {
    backgroundColor: 'rgba(60,162,89,0.1)',
    borderColor: 'rgba(60,162,89,0.3)',
  },
  tabText: {
    fontFamily: 'Doner-RegularText',
    fontSize: 14,
    color: 'rgba(255,255,255,0.4)',
  },
  tabTextActive: {
    color: '#0D7AC7',
  },
  tabTextActiveGreen: {
    color: '#3CA259',
  },
  tabBadge: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 26,
    alignItems: 'center',
  },
  tabBadgeActive: {
    backgroundColor: 'rgba(13,122,199,0.2)',
  },
  tabBadgeActiveGreen: {
    backgroundColor: 'rgba(60,162,89,0.2)',
  },
  tabBadgeText: {
    fontFamily: 'Doner-RegularText',
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
  },
  tabBadgeTextActive: {
    color: '#0D7AC7',
  },
  tabBadgeTextActiveGreen: {
    color: '#3CA259',
  },
});

export default TabBar;