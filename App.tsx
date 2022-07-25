import React from 'react';
import StackNavigators from '@navigators/StackNavigators';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from '@components/AuthContext/AuthContext';
import SavedProvider from '@components/AuthContext/SavedContext';
const App = () => {
  return (
    <>
      <AuthProvider>
        <SavedProvider>
        <NavigationContainer>
          <StackNavigators />
        </NavigationContainer>
        </SavedProvider>
      </AuthProvider>
    </>
  );
};

export default App;
