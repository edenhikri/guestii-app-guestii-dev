/**
 * MessageThreadItem Component
 * Individual message thread display
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import styles from './MessagesStyles';
import colors from '../common/colors';
import { getTimeAgo } from '../../utils/formatters';

const MessageThreadItem = ({ thread, onPress }) => {
  const hasUnread = thread?.unreadCount > 0;
  const timeAgo = thread?.lastMessage?.sent_at
    ? getTimeAgo(thread.lastMessage.sent_at)
    : thread?.lastActivity
    ? getTimeAgo(thread.lastActivity)
    : '';

  return (
    <TouchableOpacity
      style={styles.threadCard}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Chat Icon */}
      <View style={styles.threadIcon}>
        <FontAwesomeIcon icon={faComments} size={20} color={colors.accent} />
      </View>

      {/* Thread Content */}
      <View style={styles.threadContent}>
        <View style={styles.threadHeader}>
          <Text style={styles.threadTitle} numberOfLines={1}>
            {thread?.eventName || 'Event Name'}
          </Text>
          {timeAgo && <Text style={styles.threadTime}>{timeAgo}</Text>}
          {hasUnread && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{thread.unreadCount}</Text>
            </View>
          )}
        </View>

        <Text style={styles.threadVenue} numberOfLines={1}>
          {thread?.venueName || 'Venue'}
        </Text>

        {thread?.hasMessages && thread?.lastMessage ? (
          <Text style={styles.threadMessage} numberOfLines={1}>
            {thread.lastMessage.msg}
          </Text>
        ) : (
          <Text style={styles.threadMessage}>No messages yet</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MessageThreadItem;
