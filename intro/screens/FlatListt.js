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
        <Text style={styles.titulo}>Ejemplo de FlatList</Text>
        <FlatList>
      
        </FlatList>
      </View>
    </ScrollView>>
    
  )
}

const styles = StyleSheet.create({})