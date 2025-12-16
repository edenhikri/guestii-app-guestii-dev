/**
 * Hub Screen
 * Main hub screen displaying list of events
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faBars, faQrcode } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../common/SearchBar';
import EventCard from './EventCard';
import styles from './HubStyles';
import { mockEvents } from '../../utils/mockData';

const Hub = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events] = useState(mockEvents);

  const filteredEvents = events.filter(event =>
    event.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleEventPress = event => {
    // TODO: Navigate to event detail
    console.log('Event pressed:', event);
  };

  const handleMessagesPress = () => {
    navigation?.navigate('Messages');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.topNavIcon}>
          <FontAwesomeIcon icon={faCheck} size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.topNavGreeting}>
          <Text style={styles.greetingText}>Good Evening, Lewis Tollan</Text>
          <Text style={styles.greetingSubtext}>View Your Guestii Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topNavMenu}>
          <FontAwesomeIcon icon={faBars} size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search Events..."
        />
      </View>

      {/* Events List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.eventsList}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard
                key={event._id || index}
                event={event}
                onPress={handleEventPress}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No events found</Text>
              <Text style={styles.emptySubtext}>
                {searchQuery
                  ? 'Try a different search term'
                  : 'Your event invitations will appear here'}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Text style={styles.bottomNavButtonText}>Request</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomNavButton}
          onPress={handleMessagesPress}
        >
          <Text style={styles.bottomNavButtonText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavIconButton}>
          <FontAwesomeIcon icon={faQrcode} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Hub;
