import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'

class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    drawerContent = () => {
        return (
            <View style={styles.animatedBox}>
                <View style={styles.profileView}>
                    <TouchableOpacity onPress={() => { console.log('Perfil') }}>
                        <Image style={styles.profileImage} source={require('../Images/perfil.png')} />
                        <Text style={styles.profileText}>NOMBRE USER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileLine} />
                <View style={styles.viewSlide}>
                    <Image style={styles.imageSlide} source={require('../Images/candado.png')} />
                    <Text style={styles.textSlide}>  Inicio</Text>
                </View>
                <View style={styles.viewSlide}>
                    <Image style={styles.imageSlide} source={require('../Images/candado.png')} />
                    <Text style={styles.textSlide}>  Agregar evento</Text>
                </View>
                <View style={styles.viewSlide}>
                    <Image style={styles.imageSlide} source={require('../Images/candado.png')} />
                    <Text style={styles.textSlide}>  Noticias guardadas</Text>
                </View>
                <View style={styles.viewSlide}>
                    <Image style={styles.imageSlide} source={require('../Images/candado.png')} />
                    <Text style={styles.textSlide}>  Notificaciones</Text>
                </View>
                <View style={styles.profileLine} />
                <View>
                    <TouchableOpacity onPress={this.toggleOpen} style={styles.viewSlide}>
                        <Image style={styles.imageSlide} source={require('../Images/candado.png')} />
                        <Text style={styles.textSlide}>  Ajustes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.cont}>
                <MenuDrawer
                    open={this.state.open}
                    drawerContent={this.drawerContent()}
                    drawerPercentage={65}
                    animationTime={400}
                    overlay={false}
                    opacity={1}
                >
                </MenuDrawer>
                <View style={styles.container1}>
                    <View style={styles.topMenu}>
                        <TouchableOpacity onPress={this.toggleOpen}>
                            <Image style={styles.menu} source={require('../Images/Menu.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Li}>
                        <View style={styles.Line}>
                            <View style={styles.BottomMenu}>
                                <TouchableOpacity onPress={() => { console.log('Map') }}>
                                    <Image style={styles.map} source={require('../Images/MapIcon.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log('Home') }}>
                                    <Image style={styles.logo} source={require('../Images/logo-white.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { console.log('Search') }}>
                                    <Image style={styles.search} source={require('../Images/search-menu.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        width: '100%',
        height: '100%',
    },
    animatedBox: {
        flex: 1,
        backgroundColor: "#004680",
    },
    profileView: {
        alignSelf: 'center',
        width: '100%',
        paddingTop: 40,
        backgroundColor: '#04223C',
        paddingBottom: 10,
    },
    viewSlide: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 25,
        marginBottom: 17,
    },
    textSlide: {
        color: '#ffff',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    imageSlide: {
        width: 20,
        height: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        marginBottom: 10,
        alignSelf: 'center',
    },
    profileText: {
        color: '#ffff',
        fontSize: 25,
        fontFamily: 'Roboto',
        alignSelf: 'center',
    },
    profileLine: {
        width: '100%',
        borderBottomColor: '#054B85',
        borderBottomWidth: 1,
        marginBottom: 25,
    },
    container1: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    topMenu: {
        marginTop: 10,
        flex: 1,
        width: '100%',
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    Li: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    Line: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    BottomMenu: {
        height: 70,
        width: '95%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: 'white',
        borderTopWidth: 0.5,
        justifyContent: 'space-evenly',
    },
    map: {
        margin: 15,
        width: 40,
        height: 40,
    },
    logo: {
        width: 70,
        height: 70,
    },
    search: {
        margin: 15,
        width: 40,
        height: 40,
    },
})

export default Menus;