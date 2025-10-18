import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';
export default function BotonesScreen(){

  const[esEncendido, cambiarEncendido]= useState(false);
  const[color, cambiarColor]= useState('yellow');
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de Luz</Text>
        {/*
          Operador ternario:
          {Condicional ? valorTrue: valorFalse}
        */}
        <Text style={[styles.luz, {color: esEncendido ? color:'black'}]}>
          
          {esEncendido ? 'Luz Encendida': 'Luz Apagada'}
        </Text>

        <Switch
          value={esEncendido}
          onValueChange={()=> cambiarEncendido(!esEncendido)}
          trackColor={{true:'lightgreen', false: 'gray'}}
        />
        <View style={styles.botones}>
          <Button title='Amarillo' onPress={()=> esEncendido && cambiarColor('yellow')} color={'#d7c00dff'}/>
          <Button title='Azul' onPress={()=> esEncendido && cambiarColor('blue')} color={'darkblue'}/>
          <Button title='Rojo' onPress={()=> esEncendido && cambiarColor('red')} color={'red'}/>
        </View>
       
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#989898ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  titulo:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:20,
    // fontFamily:'Times New Roman',
    color: 'white',
    fontWeight: 'bold',
  },
  luz:{
    fontSize:20,
    marginBottom:10,
  }
})