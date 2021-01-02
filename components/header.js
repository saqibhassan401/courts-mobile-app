import * as React from 'react';
import {Image, StyleSheet, ScrollView, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


const Header = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.header}>
                    <Image source={require('../assets/user.png')}/>
                    Brian
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'flex-end',
        marginTop: 50,
        fontSize: 20,
        marginRight: 30,
        color: 'white'
    },
    header: {
        alignSelf: 'flex-end',
        fontSize: 20,
        color: 'white',
    },
});
export default Header;
