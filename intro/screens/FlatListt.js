import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from 'react-native'
import React, { Component } from 'react'
export default function FlatListt(){
  const datos=[
    {id: '1', nombre: 'manzana'},
    {id: '2', nombre: 'platano'},
    {id: '3', nombre: 'naranja'},
    {id: '4', nombre: 'uva'},
    {id: '5', nombre: 'fresa'},
    {id: '6', nombre: 'sandia'},
  ]
  const secciones=[
    {
      titulo: 'Frutas',
      data:[
        {nombre: 'Manzana'},
        {nombre: 'Platano'},
        {nombre: 'Naranja'},
        {nombre: 'Uva'},
      ]
    },
    {
      titulo: 'Verduras',
      data:[
        {nombre: 'Zanahoria'},
        {nombre: 'Lechuga'},
        {nombre: 'Tomate'},
        {nombre: 'Brocoli'},
      ]
    },
  ]
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.Titulo}>Ejemplo de FlatList</Text>

        <FlatList
          data={datos}
          keyExtractor={(item)=> item.id}
          renderItem={({item}) => (
            <View style={styles.elementos}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={()=> <View style={styles.separador}/>}
        />


        <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
        <SectionList
          sections={secciones}
          keyExtractor={(item,index)=>item.nombre+index}
          renderItem={({item})=>(
            <View style={styles.itemSeccion}>
              <Text style={styles.textItem}>
                {item.nombre}
              </Text>
            </View>
          )}
          renderSectionHeader={({section:{titulo}})=>(
            <View style={styles.encabezado}>
              <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={false}
        ></SectionList>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#aea2a2ff',
  },
  content:{
    padding: 20,
    paddingBottom: 40,
  },
  Titulo:{
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
    color: '#567389ff',
  },
  Titulo2:{
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
    color: '#895c56ff',
  },
  elementos:{
    width: '100%',
    height: 80,
    backgroundColor: '#7d8e9bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text:{
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: '#cdcacaff',
  },
  separador:{
    height: 10,
  },
  encabezado:{
    backgroundColor:'#a376709d',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 3,
  },
  tituloSeccion:{
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  itemSeccion:{
    backgroundColor:'#a376709d',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textItem:{
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    color: '#c5c3c3ff',
  },
})