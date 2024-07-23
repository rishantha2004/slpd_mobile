import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomStack } from './routes/HomStack';
export default function App() {
  return (
    <NavigationContainer>
      <HomStack />
    </NavigationContainer>
    
  );
}


