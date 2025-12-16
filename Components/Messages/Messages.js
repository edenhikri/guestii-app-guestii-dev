/**
 * Messages Screen
 * Messages list screen showing message threads
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faComments } from '@fortawesome/free-solid-svg-icons';
import MessageThreadItem from './MessageThreadItem';
import styles from './MessagesStyles';
import { mockMessageThreads } from '../../utils/mockData';
import { getTimeAgo } from '../../utils/formatters';

const Messages = ({ navigation }) => {
  const threads = mockMessageThreads;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Messages</Text>
        </View>
      </View>

      {/* Message Threads List */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.threadsList}>
          {threads.length > 0 ? (
            threads.map(thread => (
              <MessageThreadItem
                key={thread._id}
                thread={thread}
                onPress={() => {
                  // TODO: Navigate to message detail
                  console.log('Thread pressed:', thread);
                }}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No messages yet</Text>
              <Text style={styles.emptySubtext}>
                Messages from event organisers will appear here
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
