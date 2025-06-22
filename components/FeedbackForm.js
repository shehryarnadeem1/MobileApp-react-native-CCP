import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const FeedbackForm = ({ eventId }) => {
  const [feedback, setFeedback] = useState('');

  const submit = () => {
    Alert.alert('Thanks!', 'Your feedback has been submitted.');
    // You may also store in AsyncStorage here.
    setFeedback('');
  };

  return (
    <View>
      <TextInput
        placeholder="Your feedback..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="Submit" onPress={submit} />
    </View>
  );
};

export default FeedbackForm;
