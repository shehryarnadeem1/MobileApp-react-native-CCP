import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

const ThemeToggle = ({ onToggle }) => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(prev => !prev);
    onToggle(!isDark);
  };

  return (
    <View>
      <Text>{isDark ? 'Dark' : 'Light'} Theme</Text>
      <Switch value={isDark} onValueChange={toggle} />
    </View>
  );
};

export default ThemeToggle;
