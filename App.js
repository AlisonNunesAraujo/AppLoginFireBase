import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavStack from './src/Routs/routsStack';
import AuthProvider from './src/Contexts';
import Routs from './src/Routs/routs';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routs/>
      </AuthProvider>
    </NavigationContainer>
  );
}

  
