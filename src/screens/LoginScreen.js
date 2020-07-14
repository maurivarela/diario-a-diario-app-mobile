import React from 'react';
import * as fonts from 'expo-font'

import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../Images/logo-diario.png')}></Image>
                <Text style={styles.titulo}>DiarioAdiario</Text>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} placeholder='Usuario'
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} textContentType='password' placeholder='Contraseña'
                    />
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => props.navigation.navigate('')}>
                    <Text style={styles.ini}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.olvide}>
                        Olvidé mi contraseña
          </Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.noTiene}>¿Aún no tienes cuenta? </Text>
                    <TouchableOpacity 
                    onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.crear}>Crear Cuenta</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: -80,
        marginTop: 20,
        marginLeft: 90,
        borderRadius: 15,
    },
    titulo: {
        fontSize: 30,
        marginTop: 120,
        alignSelf: 'center',
        marginBottom: 25,
    },
    userDiv: {
        width: 271,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    contDiv: {
        width: 271,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    fotos: {
        width: 28,
        height: 28,
        marginRight: 11,
    },
    form: {
        height: 20,
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#020202',
        marginBottom: 4,
    },
    boton: {
        borderRadius: 50,
        backgroundColor: '#004680',
        width: 265,
        height: 42,
        marginTop: 46,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    ini: {
        color: '#EEF2F5',
        fontSize: 24,
        alignSelf: 'center',
        margin: 6,
    },
    olvide: {
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#216992',
        textAlign: 'center',
        marginTop: 38,
        marginBottom: -20,
    },
    noTiene: {
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#6A6565',
        marginTop: -25,
    },
    crear: {
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#004680',
    },
    center: {
        alignItems: 'center',
        marginTop: 100,
    },
});

export default LoginScreen;
