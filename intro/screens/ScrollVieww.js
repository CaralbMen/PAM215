import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, {useState, useRef} from 'react'

export default function ScrollVieww(){
  const scrollRef= useRef();
  const irAlFinal= ()=> {
    scrollRef.current.scrollToEnd({animated: true})
  }
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.Titulo}>Práctica SrollView</Text>
      <Text style={styles.Titulo2}>Ejemplo de desplazamiento vertical</Text>
      <View>
        <Button
          title='Ir al final'
          color={'#29bbf0ff'}
          onPress={irAlFinal}
        />

      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>
        <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>
        <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>
        <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>
        <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>

      <Text style={styles.Titulo2}>Ejemplo de desplazamiento Horizontal</Text>

      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={styles.scrollHorizontal}
        showsHorizontalScrollIndicator={false}

      >
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 1</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 2</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 3</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 4</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 5</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 6</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 7</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 8</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 9</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 10</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 11</Text>
        </View>
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 12</Text>
        </View>  
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ff0051ff',
  },
  content:{
    padding: 20,
    paddingBottom: 40,
  },
  Titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fcababff',
    textAlign: 'center',
  },
  Titulo2:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color:'#8ab2deff',
  },
  elementos:{
    width: '100%',
    height: 100,
    backgroundColor:'#61abfaed',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  elementos2:{
    width: 120,
    height: 100,
    backgroundColor:'#bd61faed',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  text:{
    fontSize: 16,
    fontFamily: 'Courier',
    color: 'white',
    fontWeight: '900',
    textDecorationLine:'underline',
  },
  scrollHorizontal:{
    marginVertical: 10,
    width: '100%',
  },
})