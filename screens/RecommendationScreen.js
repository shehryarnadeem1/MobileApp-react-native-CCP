import React from 'react';
import { View, StyleSheet } from 'react-native';
import AIRecommender from '../components/AIRecommender';
import mockEvents from '../services/mockEvents.json';

const RecommendationScreen = () => {
  const preferences = ['Tech', 'Sports']; // Later this can be dynamic

  return (
    <View style={styles.container}>
      <AIRecommender allEvents={mockEvents} preferences={preferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 }
});

export default RecommendationScreen;
