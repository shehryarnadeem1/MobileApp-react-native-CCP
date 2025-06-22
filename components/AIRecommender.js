import React from 'react';
import { View, Text } from 'react-native';

const AIRecommender = ({ allEvents, preferences }) => {
  const recommended = allEvents.filter(event =>
    preferences.includes(event.category)
  );

  return (
    <View>
      <Text>Recommended Events:</Text>
      {recommended.map(ev => (
        <Text key={ev.id}>{ev.name}</Text>
      ))}
    </View>
  );
};

export default AIRecommender;
