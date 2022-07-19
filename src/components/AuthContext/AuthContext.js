import React, {createContext, useState} from 'react';
import Colors from '@assets/colors/color';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('province 1');
  const [color, setColor] = useState(Colors.black);
  return (
    <AuthContext.Provider value={{myProvince, setMyProvince, color, setColor}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
