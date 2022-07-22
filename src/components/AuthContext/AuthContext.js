import React, {createContext, useState} from 'react';
import Colors from '@assets/colors/color';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('province 1');
  const [myTrending, setMyTrending] = useState('sher bd. deuba');
  const [color, setColor] = useState(Colors.black);
  const [buttonColor, setButtonColor] = useState(Colors.red);
  return (
    <AuthContext.Provider
      value={{
        myProvince,
        setMyProvince,
        color,
        setColor,
        myTrending,
        setMyTrending,
        buttonColor,
        setButtonColor,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
