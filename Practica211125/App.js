import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Iconicons} from '@expo/vector-icons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
const Tab= createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route})=>({
          headerShown:false,
          tabBarIcon:({color,size})=>{
            let iconName;
            if(route.name==='Home'){
              iconName='Home';
            }else if(route.name==='Profile'){
              iconName='Profile';
            }else{
              iconName='Settings';
            }
            return <Iconicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTinColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name={"Home"} component={Home}/>
        <Tab.Screen name={"Profile"} component={Profile}/>
        <Tab.Screen name={"Settings"} component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
