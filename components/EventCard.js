import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EventCard = ({ event, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Text style={styles.title}>{event.name}</Text>
    <Text>{event.venue} | {event.time}</Text>
    <Text style={styles.category}>{event.category}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 15, margin: 10, backgroundColor: '#fff', borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 18 },
  category: { marginTop: 5, color: 'gray' }
});

export default EventCard;
