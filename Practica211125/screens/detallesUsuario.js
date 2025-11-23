import { View, Text, StyleSheet, Pressable } from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {Ionicons} from '@expo/vector-icons';

export default function DetallesUsuario({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green"/>
        <Text style={styles.title}>Detalles de usuario</Text>
      </View>
      <Pressable style={styles.button} onPress={()=>navigation.navigate('Profile')}>
        <Text style={styles.textButton}>Ir a Profile</Text>
      </Pressable>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
     button:{
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 30,
        width: '80%',
        alignItems: 'center',
       
    },
    textButton:{
      fontSize: 20,
      color: 'red',
      fontWeight: 'bold',
    },
});