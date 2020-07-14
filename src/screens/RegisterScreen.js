import React from 'react';
import * as fonts from 'expo-font'

import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>DiarioAdiario</Text>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} placeholder='Usuario'
                    />
                </View>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} placeholder='Correo electronico'
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} placeholder='Contraseña'
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} placeholder='Repite la contraseña'
                    />
                </View>
                <View>
                    <Text style={styles.olvide}>
                        Al presionar en "Registrarse", aceptas nuestras Condiciones y la Política de datos y servicios.
                </Text>
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => props.navigation.navigate('login')}>
                    <Text style={styles.ini}>Registrarse</Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.noTiene}>¿Ya tienes cuenta? </Text>
                     <TouchableOpacity 
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.crear}>Iniciar Sesión</Text>
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
    titulo: {
        fontSize: 30,
        marginTop: 30,
        marginBottom: 10,
        alignSelf: 'center',
    },
    userDiv: {
        width: 185,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 90,
    },
    contDiv: {
        width: 185,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 90,
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
        marginTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        marginLeft: 45,
    },
    ini: {
        color: '#EEF2F5',
        fontSize: 24,
        alignSelf: 'center',
        marginLeft: 6,
    },
    olvide: {
        fontFamily: 'Circular Std',
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        marginTop: 45,
        marginBottom: 50,
        marginLeft: 8,
        marginRight: 8,
    },
    noTiene: {
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#6A6565',
        marginTop: -50,
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

export default RegisterScreen;
