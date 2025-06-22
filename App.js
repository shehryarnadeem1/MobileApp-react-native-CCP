import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-elements';
import AppNavigator from './navigation/AppNavigator';
import { lightTheme, darkTheme } from './utils/constants';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ colors: currentTheme }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <AppNavigator />
    </ThemeProvider>
  );
}
