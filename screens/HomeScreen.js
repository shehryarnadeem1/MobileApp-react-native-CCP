import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';
import mockEvents from '../services/mockEvents.json';

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Simulate fetch from mock API
    setEvents(mockEvents);
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />
      <FlatList
        data={filteredEvents}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() => navigation.navigate('EventDetail', { event: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  search: { padding: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 10 }
});

export default HomeScreen;
