import React from 'react';
import { View, Text } from 'react-native';
import RegistrationForm from '../components/RegistrationForm';

const RegisterScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={{ padding: 15 }}>
      <Text>Register for Event</Text>
      <RegistrationForm event={event} />
    </View>
  );
};

export default RegisterScreen;
