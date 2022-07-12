// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';

// const CustomSwitch = ({
//   selectionMode,
//   option1,
//   option2,
//   onSelectSwitch,
// }: any) => {
// //   const [getSelectionMode, setSelectionMode] = useState(selectionMode);
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity>
//         <Text>Provinces</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CustomSwitch;

// const styles = StyleSheet.create({

// });
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProvinceScreen from '@screens/ProvinceScreen';
import TrendingScreen from '@screens/TrendingScreen';
import Colors from '@assets/colors/color';

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  const AddButton = () => {
    return null;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginRight: 80, 
          elevation: 0, 
          borderBottomColor: Colors.red
        },
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        
      }}>
      <Tab.Screen name="Provinces" component={ProvinceScreen} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
      {/* <Tab.Screen name=" " component={AddButton} /> */}
    </Tab.Navigator>
  );
};
export default HomeTab;
