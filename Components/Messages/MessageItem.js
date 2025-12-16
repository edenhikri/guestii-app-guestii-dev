/**
 * MessageItem Component
 * Individual message display
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from './MessagesStyles';

const MessageItem = ({ message }) => {
  const isUnread = !message?.read;

  return (
    <View style={[styles.card, isUnread && styles.unreadCard]}>
      <View style={styles.messageHeader}>
        {isUnread && <View style={styles.unreadIndicator} />}
        <Text style={styles.messageTitle}>{message?.title || 'Message Title'}</Text>
      </View>
      <Text style={styles.message}>{message?.msg || 'Message content'}</Text>
      <Text style={styles.date}>
        {message?.sent_at || 'Date will appear here'}
      </Text>
    </View>
  );
};

export default MessageItem;

