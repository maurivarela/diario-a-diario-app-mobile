import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
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
    titulo: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Circular Std',
        fontWeight: 'bold',
        marginTop: 205,
        marginBottom: 25,
    },
    subtitulo: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Circular Std',
        fontWeight: 'bold',
    },
    subtitulo2: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Circular Std',
        fontWeight: 'bold',
        marginBottom: 25,
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