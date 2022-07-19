import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('');
  return (
    <AuthContext.Provider value={{myProvince, setMyProvince}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
