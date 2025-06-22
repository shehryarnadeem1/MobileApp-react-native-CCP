import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationForm = ({ event }) => {
  const handleRegister = async () => {
    await AsyncStorage.setItem(`registration_${event.id}`, JSON.stringify(event));
    alert('Registered successfully!');
  };

  return (
    <View>
      <Text>Register for {event.name}?</Text>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationForm;
