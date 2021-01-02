import * as React from 'react';
import {Image, StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


const Footer = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#33849B', '#1E4F5D', '#14343D']}
                style={styles.background}
            />
            <View style={styles.footer}>
                <View style={styles.alignImages}>
                    <Image style={styles.image } source={require('../assets/profileIcon.png')}/>
                </View>
                <View style={styles.alignImages}>
                    <Image style={styles.image} source={require('../assets/document.png')}/>
                </View>
                <View style={styles.alignImages}>
                    <Image style={styles.image} source={require('../assets/notes.png')}/>
                </View>
                <View style={styles.alignImages}>
                    <Image style={styles.image} source={require('../assets/information.png')}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor:'white',
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    selected:{
        backgroundColor:'white',
        opacity: 0.6
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    footer: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignSelf:'center'
    },
    alignImages:{
        paddingBottom:10,
        marginLeft:15,
        marginRight:15,
        marginTop: 15
    },
    image:{
        maxHeight:'50%',
        maxWidth:'50%'
    }
});
export default Footer;