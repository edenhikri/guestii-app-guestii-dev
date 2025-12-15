import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Input, SearchBar, Card, TabBar, Badge, Avatar } from './common';

const ComponentDemo = () => {
  const [tab, setTab] = useState('pending');
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {/* Buttons */}
      <Text style={styles.section}>Buttons</Text>
      <View style={styles.row}>
        <Button label="Primary" onPress={() => {}} />
        <Button label="Secondary" variant="secondary" onPress={() => {}} />
        <Button label="Outline" variant="outline" onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button label="Success" variant="success" onPress={() => {}} />
        <Button label="Danger" variant="danger" onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button label="With Icon" icon="fa-solid fa-plus" onPress={() => {}} />
        <Button label="Icon Right" iconRight="fa-solid fa-arrow-right" onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button label="Small" size="sm" onPress={() => {}} />
        <Button label="Medium" size="md" onPress={() => {}} />
        <Button label="Large" size="lg" onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button label="Loading..." loading onPress={() => {}} />
        <Button label="Disabled" disabled onPress={() => {}} />
      </View>
      <Button label="Full Width Button" fullWidth onPress={() => {}} />

      {/* TabBar */}
      <Text style={styles.section}>TabBar</Text>
      <TabBar 
        tabs={[
          { key: 'pending', label: 'Pending', count: 12 },
          { key: 'completed', label: 'Completed', count: 45, color: 'green' },
        ]} 
        activeTab={tab} 
        onTabPress={setTab} 
      />

      {/* SearchBar */}
      <Text style={styles.section}>SearchBar</Text>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search guests..." />

      {/* Inputs */}
      <Text style={styles.section}>Inputs</Text>
      <Input 
        label="Name" 
        value={name} 
        onChangeText={setName} 
        placeholder="Enter your name" 
      />
      <Input 
        label="Email" 
        value={email} 
        onChangeText={setEmail} 
        placeholder="john@example.com"
        icon="fa-solid fa-envelope"
      />
      <Input 
        label="With Error" 
        value="" 
        onChangeText={() => {}} 
        placeholder="Enter email"
        error="This field is required"
      />
      <Input 
        label="Notes" 
        value={notes} 
        onChangeText={setNotes} 
        placeholder="Add notes..."
        multiline
        numberOfLines={3}
      />

      {/* Badges */}
      <Text style={styles.section}>Badges</Text>
      <View style={styles.row}>
        <Badge label="Confirmed" variant="success" />
        <Badge label="Pending" variant="warning" />
        <Badge label="Cancelled" variant="error" />
      </View>
      <View style={styles.row}>
        <Badge label="Active" variant="accent" />
        <Badge label="Draft" variant="default" />
        <Badge label="VIP" variant="accent" showDot={false} />
      </View>

      {/* Avatars */}
      <Text style={styles.section}>Avatars</Text>
      <View style={styles.row}>
        <Avatar firstName="John" lastName="Doe" />
        <Avatar firstName="Sarah" lastName="M" variant="success" />
        <Avatar firstName="Alex" lastName="K" variant="neutral" />
      </View>
      <View style={styles.row}>
        <Avatar firstName="S" lastName="M" size={32} />
        <Avatar firstName="J" lastName="D" size={44} />
        <Avatar firstName="A" lastName="B" size={56} />
      </View>

      {/* Cards */}
      <Text style={styles.section}>Cards</Text>
      <Card>
        <View style={styles.cardContent}>
          <Avatar firstName="John" lastName="Doe" />
          <View style={styles.cardBody}>
            <Text style={styles.cardName}>John Doe</Text>
            <Text style={styles.cardMeta}>VIP Access • $75.00</Text>
          </View>
        </View>
      </Card>
      <Card variant="selected" style={{ marginTop: 12 }}>
        <View style={styles.cardContent}>
          <Avatar firstName="Sarah" lastName="M" />
          <View style={styles.cardBody}>
            <Text style={styles.cardName}>Sarah Miller</Text>
            <Text style={styles.cardMeta}>General Admission • $25.00</Text>
          </View>
        </View>
      </Card>
      <Card variant="success" style={{ marginTop: 12 }}>
        <View style={styles.cardContent}>
          <Avatar firstName="Alex" lastName="K" variant="success" />
          <View style={styles.cardBody}>
            <Text style={styles.cardName}>Alex Kim</Text>
            <Text style={[styles.cardMeta, { color: '#3CA259' }]}>Payment Complete</Text>
          </View>
        </View>
      </Card>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01000D',
  },
  content: {
    padding: 20,
  },
  section: {
    fontFamily: 'Doner-RegularText',
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    marginTop: 24,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBody: {
    marginLeft: 12,
    flex: 1,
  },
  cardName: {
    fontFamily: 'Doner-RegularText',
    fontSize: 15,
    color: '#fff',
    marginBottom: 2,
  },
  cardMeta: {
    fontFamily: 'Doner-RegularText',
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
  },
});

export default ComponentDemo;