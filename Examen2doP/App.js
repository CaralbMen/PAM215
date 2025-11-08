import { StatusBar } from 'expo-status-bar';
import { Switch, ScrollView, StyleSheet, Text, View, Animated, ImageBackground  } from 'react-native';
import React, {useState, useEffect} from 'react';
export default function App() {
  const [cargando, setCargando]= useState(true);
  const desvanecido= new Animated.Value(1);
  const [estadoTarea, setEstadoTarea]= useState('Pendiente');
  function actualizarEstadoTarea(estado){
    if(estado){
      setEstadoTarea('Completada');
    }
  useEffect(()=>{
    const timer= setTimeout(()=>{
      Animated.timing(desvanecido,{
        toValue: 0,
        duration: 900,
      }).start(()=>setCargando(false));
    }, 500);
  },[])
  if(cargando){
    return(
      <Animated.View style={[styles.container, {opacity: desvanecido}]}>
        <Text style={styles.textoSplash}>Dale Tu Puedes!</Text>
      </Animated.View>
    )
  }
  return (
    <ImageBackground 
      style={[styles.container, styles.main]}
      // source={require('../assets/Fondo.jpg')}
      resizeMode='contain'

    >
      <View style={styles.tituloContent}>
        <Text style={styles.titulo}>Mis Deberes</Text>
        <Text>07 de Noviembre del 2025</Text>
      </View>
      <View>
        <ScrollView 
          showsVerticalScrollIndicator={true}
        >
           <View style={styles.tituloSeccionContainer}>
              <Text style={styles.tituloCategoria}>Trabajo</Text>
            </View>
            <ScrollView
              horizontal
              nestedScrollEnabled={true}
              style={styles.HorizontalContainer}
              showsHorizontalScrollIndicator={true}
            >
              <View style={styles.tarea}>
                <Text>
                  Limpiar la casa del perro
                </Text>
                <Text>{estadoTarea}</Text>
                <View>
                  <Text>Completar</Text>
                  <Switch 
                  value={estadoTarea}
                    onChange={()=>setEstadoTarea(!estadoTarea)}
                  ></Switch>
                </View>
              </View>
             
             
            </ScrollView>
          </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoSplash:{
    fontSize: 30,
    fontWeight: 700,
  },
  main:{
    justifyContent:'flex-start',
  },
  tituloContent:{
    width:'100%',
    height: 80,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 40,
  },
 
  tituloCategoria:{
    fontSize: 20,
  },
  HorizontalContainer:{
    marginHorizontal: 10,
    width: '100%',
   
  },
  tarea:{
    width: 200,
    height: 100,
    backgroundColor: 'red',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
});
