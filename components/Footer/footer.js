import * as React from 'react';
import {Alert, Image, StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import 'react-native-gesture-handler';
import styles from './styles';

export default function Footer ({navigation}) {
    console.log(navigation);
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#33849B', '#1E4F5D', '#14343D']}
                style={styles.background}
            />
            <View style={styles.footer}>
                <View style={styles.alignImages}>
                    <TouchableOpacity onPress={() => navigation.navigate('ClassAttendance')} >
                    <Image style={styles.image } source={require('../../assets/profileIcon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.alignImages}>
                    <TouchableOpacity onPress={() => navigation.navigate('TestResults')} >
                        <Image style={styles.image} source={require('../../assets/document.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.alignImages}>
                    <TouchableOpacity onPress={() => navigation.navigate('NotesList')} >
                    <Image style={styles.image} source={require('../../assets/notes.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.alignImages}>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} >
                    <Image style={styles.image} source={require('../../assets/information.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
