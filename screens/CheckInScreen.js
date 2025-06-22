import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CheckInScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text>Scan this QR at event check-in:</Text>
      <QRCode value={event.id.toString()} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default CheckInScreen;
