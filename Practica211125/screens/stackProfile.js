import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from './profile';
import Detalles from './detallesUsuario';
const StackScreens= createNativeStackNavigator();

export default function stackProfile(){
    return(
        <StackScreens.Navigator>
            <StackScreens.Screen name="Profile" component={Profile}/>

            <StackScreens.Screen 
                name="Detalles" component={Detalles}
                options={{
                    headerShown:true,
                }}    
            />
        </StackScreens.Navigator>
    )
}