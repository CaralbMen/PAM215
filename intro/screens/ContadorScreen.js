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
    //Para aplicar los estilos, es parecido a HTML, pero mediante objetos en lugar de clases
    <View style={styles.container}> 
      {/* Todos los elementos van dentro de un <view> */}
      {/* En el caso de variables, se pone entre llaves */}
      <Text style={styles.texto}>Contador</Text> 
      <Text style={styles.texto2}>{contador}</Text> 
      <View style={styles.contenedorBotones}>
        <Button color='green' title='Incrementar' onPress={()=>setContador(contador+1)}></Button>
        <Button color='red' title='Decrementear' onPress={()=>setContador(contador-1)}></Button>
        <Button color='orange' title='Reiniciar' onPress={()=>setContador(0)}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
/*
  3. Estilos:
    Zona de estilos para dar formato a lo que se ve en la pantalla, dede estilos y posicionamiento
*/
//Esto es, básicamente un objeto llamado styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1ff',
    alignItems: 'center',
    justifyContent: 'center',
    //Esto es básicamente un objeto dentro de otro, se separan por comas
  },
  texto:{
    fontFamily:"Times New Roman",
    fontSize:35,
    color:'#c90808ff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2:{
    fontFamily:"Courier",
    fontSize:40,
    color:'#3eb723ff',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:15,
  },
});
