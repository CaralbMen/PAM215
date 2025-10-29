import React, { useState } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Button, TextComponent } from 'react-native'

export default function ActivityIndicatorr(){
  const [loading, setLoading]= useState(false);
  const startLoading=()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false), 3000);
  };

  if(loading){
    return(
      <View style={styles.container}>
        <View>
          <ActivityIndicator
            size="large"
            color="#ff3a3aff"
            animating={true}
            hidesWhenStopped={true}
          />
          <Text style={styles.texto}>Carganding... </Text>
        </View>
      </View>
    );
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Práctica ActivityIndicatoor</Text>
      <Button
        title='Carga de datos'
        onPress={startLoading}
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',
  },
  texto:{
    color: '#d62222ff',
  },
  title:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: 'lightgreen',
  },
  loaderContainer:{
    alignItems:'center',

  },
 
});