/**
 * EventCard Component
 * Individual event card component
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './HubStyles';
import colors from '../common/colors';

const EventCard = ({ event, onPress }) => {
  const isLive = event?.status === 'live' || event?.isLive;
  const currentTime = new Date();
  const eventStart = event?.start_date ? new Date(event.start_date) : null;
  const eventEnd = event?.end_date ? new Date(event.end_date) : null;
  
  // Check if event is currently happening
  const isCurrentlyLive = eventStart && eventEnd && 
    currentTime >= eventStart && currentTime <= eventEnd;

  return (
    <TouchableOpacity
      style={[styles.eventCard, (isLive || isCurrentlyLive) && styles.eventCardLive]}
      onPress={() => onPress && onPress(event)}
      activeOpacity={0.7}
    >
      <View style={styles.eventCardImageContainer}>
        {event?.banner_image_url ? (
          <Image
            source={{ uri: event.banner_image_url }}
            style={styles.eventCardImage}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.eventCardImage, { backgroundColor: colors.bgElevated }]} />
        )}
        {(isLive || isCurrentlyLive) && (
          <View style={styles.liveIndicator} />
        )}
      </View>
      
      <View style={styles.eventCardContent}>
        <View style={styles.eventCardHeader}>
          <Text style={styles.eventCardTitle} numberOfLines={2}>
            {event?.name || 'Event Name'}
          </Text>
          {(isLive || isCurrentlyLive) && (
            <View style={styles.nowButton}>
              <Text style={styles.nowButtonText}>NOW</Text>
            </View>
          )}
        </View>
        
        {event?.venueId && (
          <View style={styles.eventCardLocation}>
            <FontAwesomeIcon 
              icon={faMapMarkerAlt} 
              size={12} 
              color={colors.textSecondary} 
            />
            <Text style={styles.locationText} numberOfLines={1}>
              {event.venueId.name || 'Venue'}
            </Text>
          </View>
        )}
        
        {(isLive || isCurrentlyLive) && (
          <View style={styles.eventCardStatus}>
            <View style={styles.nowBadge}>
              <Text style={styles.nowBadgeText}>NOW</Text>
            </View>
          </View>
        )}
        
        {event?.tags && event.tags.length > 0 && (
          <View style={styles.genreTags}>
            {event.tags.map((tag, index) => (
              <View key={tag._id || index} style={styles.genreTag}>
                <Text style={styles.genreTagText}>{tag.tag || tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
