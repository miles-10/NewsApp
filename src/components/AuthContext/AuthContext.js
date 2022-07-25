import React, {createContext, useState} from 'react';
import Colors from '@assets/colors/color';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [myProvince, setMyProvince] = useState('province 1');
  const [myTrending, setMyTrending] = useState('sher bd. deuba');
  const [color, setColor] = useState(Colors.black);
  const [buttonColor, setButtonColor] = useState(Colors.red);
  const [detailSave] = useState();
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
        detailSave,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
