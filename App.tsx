import React from 'react';
import StackNavigators from '@navigators/StackNavigators';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from '@components/AuthContext/AuthContext';
const App = () => {
  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigators />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};

export default App;
