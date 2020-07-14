import React from 'react';
import * as fonts from 'expo-font'

import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = props => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Diario A Diario</Text>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} defaultValue='Usuario'
                    />
                </View>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} defaultValue='Correo electronico'
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} defaultValue='Contraseña'
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} defaultValue='Repite la contraseña'
                    />
                </View>
                <View>
                    <Text style={styles.olvide}>
                        Al presionar en "Registrarse", aceptas nuestras Condiciones y la Política de datos.
                </Text>
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => props.navigation.navigate('')}>
                    <Text style={styles.ini}>Registrarse</Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.noTiene}>¿Ya tienes cuenta? </Text>
                    <TouchableOpacity>
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
        backgroundColor: '#EEF2F5'
    },
    titulo: {
        fontSize: 30,
        marginTop: 12,
        alignSelf: 'center',
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
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        marginTop: 38,
    },
    noTiene: {
        fontFamily: 'Circular Std',
        fontSize: 18,
        color: '#6A6565',
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
