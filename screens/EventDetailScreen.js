import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegistrationForm from '../components/RegistrationForm';

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text>{event.venue} | {event.time}</Text>
      <Text>{event.description}</Text>
      <RegistrationForm event={event} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});

export default EventDetailScreen;
