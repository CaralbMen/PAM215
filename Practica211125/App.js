import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import Home from './screens/home';
import stackProfile from './screens/stackProfile';
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
              iconName='home-outline';
            }else if(route.name==='Profile'){
              iconName='person-outline';
            }else{
              iconName='settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
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
        <Tab.Screen name={"Profile"} component={stackProfile}
        options={({route})=>{
            const routeName= getFocusedRouteNameFromRoute(route)??'Profile';
            if(routeName==="Detalles"){
              return{
                tabBarStyle:{display:'none'},
              };
            }
            return{
              tabBarStyle:{paddingBottom:5, height: 60},
            }
          }
        }
        />
        <Tab.Screen name={"Settings"} component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
