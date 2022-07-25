import { StyleSheet } from 'react-native'
import React, {useState, useEffect, useContext, createContext} from 'react'
import AsyncProvider from '@react-native-async-storage/async-storage'

const SavedContext = createContext();
const SavedProvider = ({children}) => {
    const [saved, setSaved] = useState([]);

    const findSaved = async () => {
        const value = await AsyncProvider.getItem('Saved');
        if(value !== null) {
            setSaved(JSON.parse(value));
        }
    };

    useEffect(() => {
        findSaved();
    }, []);
  return (
   <SavedContext.Provider value={{saved, setSaved, findSaved}}>
    {children}
    </SavedContext.Provider>
  )
}

export const useSaved = () => useContext(SavedContext);

export default SavedProvider
