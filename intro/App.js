/*
  1. Importaciones:
    Zona de importaciones para usar lo que vamos a necesitar
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
/*
  2. Main:
    Zona de componentes para poner lo que se va a ver en la pantalla
*/
export default function App() {
  const[contador, setContador]= useState(0);
  return (

    <View style={styles.container}> 
      {/* Todos los elementos van dentro de un <view> */}
      {/* En el caso de variables, se pone entre llaves */}
      <Text>Contador: {contador}</Text> 
      <Button title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
      <Button title='Decrementear' onPress={()=>setContador(contador-1)}></Button>
      <Button title='Reiniciar' onPress={()=>setContador(0)}></Button>
     
      <StatusBar style="auto" />

    </View>

  );
}
/*
  3. Estilos:
    Zona de estilos para dar formato a lo que se ve en la pantalla, dede estilos y posicionamiento
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
