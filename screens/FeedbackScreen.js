import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackScreen = ({ route }) => {
  const { eventId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Give feedback:</Text>
      <FeedbackForm eventId={eventId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 }
});

export default FeedbackScreen;
