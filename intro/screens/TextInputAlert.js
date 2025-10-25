import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{ useState } from 'react'
export default function TextInputAlert(){
  const [nombre, setNombre]= useState('');
  const [pwd, setPwd]=useState('');
  const [telefono, setTelefono]=useState('');
  const mostrarAlerta=()=>{
    if(nombre.trim()==='' || pwd.trim()==='' || telefono.trim()===''){
      Alert.alert('Error.\nFavor de llenar todo los campos en tu dispositivo móvil');
      alert('Error.\nFavor de llenar todo los campos en tu dispositivo móvil');
    }else{
      alert('Llenaste los datos correctamente en tu móvil\n\n'+
        `Nombre: ${nombre}\nPassword: ${pwd}\nTeléfono: ${telefono}`);
      Alert.alert(`Llenaste los datos correctamente en tu web\n\n`+
        `Nombre: ${nombre}\nPassword: ${pwd}\nTeléfono: ${telefono}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextInput & Alert</Text>
      <Text style={styles.etiqueta}>Nombre: </Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe tu nombre aquí'
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.etiqueta}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe tu contraseña aquí'
        secureTextEntry={true}
        value={pwd}
        onChangeText={setPwd}
      />
      <Text style={styles.etiqueta}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe tu telefono aqui'
        keyboardType='phone-pad'
        value={telefono}
        onChangeText={setTelefono}
      />

      <Button
      color={'#4695e0ff'}
        title='Presioname'
        onPress={mostrarAlerta}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#97cae8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontFamily:'Times New Roman',
    fontSize: 32,
    color: '#fefefeff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom:20,
  },
  etiqueta:{
    fontSize: 16,
    marginBottom: 7,
    marginTop: 7,
  },
  input:{
    width: '70%',
    borderWidth:2,
    borderColor: '#5cabd8ff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#adc5d3ff',
  },
})