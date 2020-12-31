import * as React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


const ClassAttendance = () => {

    const items = [
        {
            "Tile":"Attendance"
        },
        {
            "Tile":"Homework"
        },
        {
            "Tile":"Answers"
        },
        {
            "Tile":"Binder"
        },
        {
            "Tile":"DT"
        },
        {
            "Tile":"Mission"
        },
        {
            "Tile":"DT"
        },
        {
            "Tile":"Presentation"
        },
        {
            "Tile":"Status"
        },
        {
            "Tile":"Attitude"
        },
        {
            "Tile":"Assignment"
        },
        {
            "Tile":"Note"
        },
        {
            "Tile":"Progress"
        }
    ]

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
                    CLASS ATTENDANCE
                </Text>
            </View>
            <View>
                <Text style={styles.classroomName}>
                    Classroom Name: Luxpm
                </Text>
            </View>
            <View>
                <Text style={styles.classroomName}>
                    Dec 20, 2020
                </Text>
            </View>
            <View style={styles.btn2}>
            {
                items.map((item,index)=>(
                    <View style={styles.btn1} key={index}>
                        <Text style={styles.attendance}>{item.Tile}</Text>
                        <View style={styles.dropdownIcon}>
                            <Image source={require('../assets/deopdownicon.png')} />
                        </View>
                    </View>
                ))
            }
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A5A56',
    },
    paragraph: {
        alignSelf:'flex-end',
        marginTop: 50,
        fontSize: 20,
        marginRight:30,
        color:'white'
    },
    main: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 35,
        color:'white',
        fontWeight: "bold"
    },
    classroomName:{
        textAlign: 'center',
        color:'white',
        fontSize:20,
        marginTop: 30
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        alignSelf:'center',
        backgroundColor: '#3589A1',
        marginTop:5,
        width:'90%',
        color:'white',
        padding:6,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btn2:{
      paddingTop:20
    },
    attendance:{
        color:'white',
        fontSize: 18,
    },
    dropdownIcon:{
        marginRight:10,
        marginTop:3
    }
});
export default ClassAttendance;
