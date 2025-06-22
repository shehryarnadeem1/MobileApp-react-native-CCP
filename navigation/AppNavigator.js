import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import CheckInScreen from '../screens/CheckInScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import RecommendationScreen from '../screens/RecommendationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      <Stack.Screen name="CheckIn" component={CheckInScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Recommendations" component={RecommendationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
