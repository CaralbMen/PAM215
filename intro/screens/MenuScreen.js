import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInput from './TextInputAlert'
import BackroundImage from './BackroundImage'
import ScrollView from './ScrollView'
import ActivityIndicator from './ActivityIndicator'
import FlatList from './FlatList'
import Modal from './Modal'
import Bottom from './Bottom'

export default function MenuScreen(){
    const [screen, setScreen]= useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/> 
        case 'botones':
            return <BotonesScreen/> 
        case 'TextInput':
            return <TextInput/>
        case 'BackroundImage':
            return <BackroundImage/>
        case 'ScrollView':
            return <ScrollView/>
        case 'ActivityIndicator':
            return <ActivityIndicator/>
        case 'FlatList':
            return <FlatList/>
        case 'Modal':
            return <Modal/>
        case 'Bottom':
            return <Bottom/>
        case 'menu':
            default:
                return(
                    <View style={styles.Main}>
                        <Text style={styles.h1}> Menú de Prácticas </Text>
                        <View style={styles.Botones}>
                            <Button color={'gray'} title="Pract: Contador" onPress={()=>setScreen('contador')}/>
                            <Button color={'gray'} title="Pract: Botones" onPress={()=>setScreen('botones')}/>
                            <Button color={'gray'} title="Pract: Text Input" onPress={()=>setScreen('TextInput')}/>
                            <Button color={'gray'} title="Pract: Image Backround" onPress={()=>setScreen('BackroundImage')}/>
                            <Button color={'gray'} title="Pract: ScrollView" onPress={()=>setScreen('ScrollView')}/>
                            <Button color={'gray'} title="Pract: Activity Indicator" onPress={()=>setScreen('ActivityIndicator')}/>
                            <Button color={'gray'} title="Pract: FlatList" onPress={()=>setScreen('FlatList')}/>
                            <Button color={'gray'} title="Pract: Modal" onPress={()=>setScreen('Modal')}/>
                            <Button color={'gray'} title="Pract: Bottom" onPress={()=>setScreen('Bottom')}/>
                        </View>
                    </View>
                )
    }
}
const styles = StyleSheet.create({
    h1:{
        fontFamily: 'Times New Roman',
        fontSize: 30,
        marginBottom: 50,
        color: '#195fd0ff',
        fontWeight: 600,
    },
    Main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e2e0e0ff',
    },
    Botones:{
        gap: 20,
        width: 450,
    },
})


