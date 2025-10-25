import { Text, StyleSheet, View, ImageBackground, TextInput, Button, Switch, Animated } from 'react-native'
import React, { Component, useState, useEffect } from 'react'

export default function Repaso1Screen(){
    const [aceptado, setAceptado]= useState(false)
    const [nombreUsuario, setNombreUsuario]= useState('')
    const [correo, setCorreo]= useState('')
    const validar=()=>{
        if(nombreUsuario.trim()==='' && correo.trim()===''){
            alert("Llena todos los campos")
        }else if(nombreUsuario.trim()==''){
            alert("Escribe el nombre de usuario")
        }else if(correo.trim()===''){
            alert("Llena el campo de correo")
        }else if(!aceptado){
            alert("Acepta los términos y condiciones")
        }else{
            const sinEspacios=correo.trim();
            const caracteres= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(caracteres.test(sinEspacios)){
                alert("Has llenado todo correctamente!\nNombre: "+nombreUsuario+"\nCorreo: "+correo)
            }else{
                alert("El correo no es válido")
            }
        }
        
    }
    const [carganding, setCargaanding]= useState(true)
    const opacidad= new Animated.Value(1)

    useEffect(()=>{
        const temporizador= setTimeout(()=>{
            Animated.timing(opacidad,{
                toValue:0,
                duration: 600,
            }).start(()=>setCargaanding(false));
        },2000);
        return()=> clearTimeout(timer);
    },[]);
    if(carganding){
        return(
            <Animated.View style={styles.splashContainer}>
                <ImageBackground
                    source={require('../assets/SplashRepaso1.png')}
                    resizeMode='contain'
                    style={styles.splashImagen}
                >
                <Text>
                    Cargando
                </Text>
                </ImageBackground>
            </Animated.View>
        );
    }
    return (
        <ImageBackground
            source={require('../assets/FondoRepaso1.png')}
            style= {styles.background}
            resizeMode='cover'
        >
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Login</Text>
                <View style={styles.inputsContent}>
                    <Text style={styles.label}>
                        Ingresa tu nombre:
                    </Text>
                    <TextInput 
                        style={styles.input}
                        value={nombreUsuario}
                        onChangeText={setNombreUsuario}
                    >
                    </TextInput>
                    <Text style={styles.label}>
                        Ingresa tu correo:
                    </Text>
                    <TextInput style={styles.input}
                        value={correo}
                        onChangeText={setCorreo}
                    >
                    </TextInput>
                     
                    <View style={styles.terminosContent}>
                        <Text style={styles.terminosLabel}>
                            Acepto Términos y Condiciones
                        </Text>
                        <Switch
                            value={aceptado}
                            onValueChange={()=>setAceptado(!aceptado)}
                        ></Switch>
                    </View>




                    <Button
                        title="Enviar"
                        color={'blue'}
                        onPress={validar}
                    />
                        
                    
                </View>
            </View>
        </ImageBackground>
    )
    
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    contenedor:{
        width: '70%',
        height: '50%',
        backgroundColor: 'gray',
        opacity: '70%',
        padding: 30,
        alignItems: 'center',
        justifyContent:'end',
    },
    titulo:{
        fontFamily: 'Times New Roman',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom:15,
    },
    inputsContent:{
        width: '80%',
        height: '80%',
        justifyContent:'center',
        alignItems: 'center',
    },
    label:{
        fontSize: 15,
        color: 'white',
        fontFamily:'Arial',
    },
    input:{
        width: '70%',
        borderWidth:2,
        borderColor: '#4b4b4bff',
        borderRadius: 8,
        padding: 6,
        backgroundColor: '#e4e9ecff',
        marginTop: 8,
        marginBottom: 25,
    },
    terminosContent:{
        flexDirection:'row',
        gap: 10,
        marginBottom: 35,
    },
    terminosLabel:{
        fontSize:13,
    },
    splashImagen:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    splashContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
  },
})