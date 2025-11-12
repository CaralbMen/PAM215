import { useState } from 'react'
import { Text, StyleSheet, View, Pressable, Modal, TextInput } from 'react-native'

export default function Modall(){
  const [mostrar, setMostrar]= useState(null);
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Pressable style={styles.boton} onPress={()=>setMostrar('login')}>
            <Text style={styles.text}>Iniciar Sesión</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={()=>setMostrar('registro')}>
            <Text style={styles.text}>Registrarse</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={()=>setMostrar('alerta')}>
            <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal
          animationType='slide'
          transparent={false}
          visible={mostrar==='login'}
          onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Login</Text>
            <TextInput placeholder='Ingresa el usuario' style={styles.input}/>
            <TextInput placeholder='Ingresa tu contraseña' secureTextEntry={true} style={styles.input}/>
            <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
              <Text style={styles.text}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          animationType='slide'
          transparent={false}
          visible={mostrar==='registro'}
          onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}>Formulario de Registro</Text>
            <TextInput placeholder='Ingresa el usuario' style={styles.input}/>
            <TextInput placeholder='Ingresa el correo' keyboardType='email-address' style={styles.input}/>
            <TextInput placeholder='Ingresa tu contraseña' secureTextEntry={true} style={styles.input}/>
            <Pressable style={styles.boton} onPress={()=>setMostrar(null)}>
              <Text style={styles.text}>Registrarse</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          animationType='fade'
          transparent={false}
          visible={mostrar==='alerta'}
          onRequestClose={()=>setMostrar(null)}
        >
          <View style={styles.container3}>
            <View style={styles.containerAlerta}>
              <Text style={styles.textAlerta}>Esto es una Alerta simulada con un Modal</Text>
              <View style={styles.containerBoton}>
                <Pressable style={styles.boton1} onPress={()=>setMostrar(null)}>
                  <Text style={styles.text}>Ok</Text>
                </Pressable>
                <Pressable style={styles.boton2} onPress={()=>setMostrar(null)}>
                  <Text style={styles.text}>Cerrar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#c6c4c4ff',
  },
  container3:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a4cff3ff',
  },
  boton:{
    backgroundColor: '#b9ec9cff',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  text:{
    color: '#555454ff',
    fontSize: 18,
    fontWeight: '500',
  },
  titulo:{
    fontSize: 30,
    marginBottom: 20,
  },
  input:{
    width:'80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginVertical: 20,
    padding: 13,
    backgroundColor:'#e3e3e3ff',
  },
  containerAlerta:{
    width: 300,
    height: 200,
    backgroundColor:'#c690e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  textAlerta:{
    fontSize: 20,
    color: 'white',
  },
  boton1:{
    backgroundColor: '#b7b2b2ff',
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },
  boton2:{
    backgroundColor: '#fcb4b4ff',
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },
  containerBoton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '80%',
  },
});