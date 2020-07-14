import React from 'react';
import * as fonts from 'expo-font'


import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { preventAutoHide } from 'expo-splash-screen';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../Images/logo-diario.png')}></Image>
                <Text style={styles.titulo}>Diario A Diario</Text>
                <Text style={styles.subtitulo}>Cambiando el futuro,</Text>
                <Text style={styles.subtitulo2}>un día a la vez</Text>
                <TouchableOpacity style={styles.boton}
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.textBoton}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}
                    onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.textBoton}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEF2F5',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
        marginTop: 50,
        marginLeft: 90
    },
    titulo: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        light: {
            fontFamily: 'sans-serif-light',
        },
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 10
    },
    subtitulo: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
    subtitulo2: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        marginBottom: 5,
    },
    boton: {
        borderRadius: 50,
        backgroundColor: '#004680',
        width: 270,
        height: 60,
        marginTop: 45,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    textBoton: {
        color: '#EEF2F5',
        fontSize: 24,
        alignSelf: 'center',
        margin: 13,
        fontFamily: 'Circular Std',
    },
});

export default HomeScreen;