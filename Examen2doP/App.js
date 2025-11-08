import { StatusBar } from 'expo-status-bar';
import {Button, Switch, ScrollView, StyleSheet, Text, View, Animated, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
export default function App() {
  const [cargando, setCargando]= useState(true);
  const desvanecido= new Animated.Value(1);
  const [estadoTarea, setEstadoTarea]= useState(false);
  const [estado2, setEstado2]= useState(false);
  const [estado3, setEstado3]= useState(false);
  const [estado4, setEstado4]= useState(false);
  const [estado5, setEstado5]= useState(false);
  const [estado6, setEstado6]= useState(false);
  const reiniciar=()=>{
    setEstadoTarea(false)
    setEstado2(false)
    setEstado3(false)
    setEstado4(false)
    setEstado5(false)
    setEstado6(false)
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
      source={require('./assets/Imagen1.png')}
      resizeMode='cover'

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
              style={[styles.HorizontalContainer, styles.trabajo]}
              showsHorizontalScrollIndicator={true}
            >
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Limpiar la casa del perro
                </Text>
                <Text>Prioridad: Alta</Text>
                <Text>{estadoTarea}</Text>
                <View style={styles.switchCOntent}>
                  <Text >Completar</Text>
                  <Switch 
                    value={estadoTarea}
                    onValueChange={()=>setEstadoTarea(!estadoTarea)}
                  ></Switch>
                  <Text style={[styles.estadoTarea]}>
                    {estadoTarea?'Completada':'Sin Completar'}
                  </Text>
                </View>
              </View>
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Lavar Ropa
                </Text>
                 <Text>Prioridad: Alta</Text>
                <Text>{estado2}</Text>
                <View>
                  <Text >Completar</Text>
                  <Switch 
                    value={estado2}
                    onValueChange={()=>setEstado2(!estado2)}
                  ></Switch>
                 
                </View>
                <Text style={[styles.estadoTarea]}>
                  {estado2?'Completada':'Sin Completar'}
                </Text>
              </View>
            </ScrollView>
            <View style={styles.tituloSeccionContainer}>
              <Text style={styles.tituloCategoria}>Personal</Text>
            </View>
             <ScrollView
              horizontal
              nestedScrollEnabled={true}
              style={[styles.HorizontalContainer, styles.personal]}
              showsHorizontalScrollIndicator={true}
            >
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Guardar para l viaje
                </Text>
                <Text>Prioridad: Baja</Text>
                <Text>{estado3}</Text>
                <View style={styles.switchCOntent}>
                  <Text >Completar</Text>
                  <Switch 
                    value={estado3}
                    onValueChange={()=>setEstado3(!estado3)}
                  ></Switch>
                  <Text style={[styles.estadoTarea]}>
                    {estado3?'Completada':'Sin Completar'}
                  </Text>
                </View>
              </View>
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Comprar Cafe
                </Text>
                 <Text>Prioridad: Alta</Text>
                <Text>{estado4}</Text>
                <View>
                  <Text >Completar</Text>
                  <Switch 
                    value={estado4}
                    onValueChange={()=>setEstado4(!estado4)}
                  ></Switch>
                 
                </View>
                <Text style={[styles.estadoTarea]}>
                  {estado4?'Completada':'Sin Completar'}
                </Text>
              </View>
            </ScrollView>

             <View style={styles.tituloSeccionContainer}>
              <Text style={styles.tituloCategoria}>Estudios</Text>
            </View>
             <ScrollView
              horizontal
              nestedScrollEnabled={true}
              style={[styles.HorizontalContainer, styles.estudios]}
              showsHorizontalScrollIndicator={true}
            >
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Hacer la tarea de mate
                </Text>
                <Text>Prioridad: Alta</Text>
                <Text>{estado5}</Text>
                <View style={styles.switchCOntent}>
                  <Text >Completar</Text>
                  <Switch 
                    value={estado5}
                    onValueChange={()=>setEstado5(!estado5)}
                  ></Switch>
                  <Text style={[styles.estadoTarea]}>
                    {estado5?'Completada':'Sin Completar'}
                  </Text>
                </View>
              </View>
              <View style={styles.tarea}>
                <Text style={styles.tareaTexto}>
                  Hacer la tarea de Fisica
                </Text>
                 <Text>Prioridad: Media</Text>
                <Text>{estado6}</Text>
                <View>
                  <Text >Completar</Text>
                  <Switch 
                    value={estado6}
                    onValueChange={()=>setEstado6(!estado6)}
                  ></Switch>
                 
                </View>
                <Text style={[styles.estadoTarea]}>
                  {estado6?'Completada':'Sin Completar'}
                </Text>
              </View>
            </ScrollView>
            <Button
              title='Reiniciar Todo'
              onPress={reiniciar}
            >
            </Button>
          </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  estudios:{backgroundColor:'#dc45458a'},
  personal:{backgroundColor:'#bbdc4571'},

  trabajo:{backgroundColor:'#8c45dc90'},
  switchCOntent:{
    flexDirection:'row',
    marginTop: 10,
    alignItems:'center',
    gap: 10,
  },
  tareaTexto:{
    marginBottom: 25,
    marginTop: 15,
  },
  estadoTarea:{
    fontSize: 12,
    marginTop: 5
  },
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
    width: '100%',
    height: '100%',
    paddingTop:20,
  },
  tituloContent:{
    width:'100%',
    height: 80,
    // backgroundColor: 'blue',
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
    marginBottom: 20,
  },
  tarea:{
    width: 200,
    height: 150,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 15,
  },
});
