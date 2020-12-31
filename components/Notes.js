import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient} from "expo-linear-gradient";

const Notes = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#33849B', '#1E4F5D', '#14343D']}
                style={styles.background}
            />
            <View >
                <Text style={styles.paragraph}>
                    <Image source={require('../assets/user.png')} />
                    Brian
                </Text>
            </View>
            <View>
                <Text style={styles.main}>
                    Note
                </Text>
            </View>
            <View style={styles.input1}>
                <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1, marginRight: 5, width: '50%'}}
                    onChangeText={text => onChangeText(text)}

                />
                <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1, width: '50%'}}
                    onChangeText={text => onChangeText(text)}

                />
            </View>
            <View style={{marginTop: '10px'}}>

                <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1,}}
                    onChangeText={text => onChangeText(text)}

                />


            </View>
            <View style={{marginTop: '10px'}}>

                <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => onChangeText(text)}

                />


            </View>
            <View style={{marginTop: '10px'}}>

                <TextInput
                    style={{height: 250, borderColor: 'gray', borderWidth: 1, marginBottom: '10px'}}
                    onChangeText={text => onChangeText(text)}

                />


            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    input1: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    paragraph: {
        alignSelf:'flex-end',
        marginTop: 50,
        fontSize: 20,
        marginRight:30,
        color:'white'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    main: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 35,
        color:'white',
        fontWeight: "bold"
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        marginTop: 90
    }
});
export default Notes;
