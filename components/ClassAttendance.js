import * as React from 'react';
import {Image, StyleSheet,ScrollView, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Footer from './footer'
import Header from "./header";


const ClassAttendance = () => {

    const classAttendanceList = [
        {
            "Title": "Attendance"
        },
        {
            "Title": "Homework"
        },
        {
            "Title": "Answers"
        },
        {
            "Title": "Binder"
        },
        {
            "Title": "DT"
        },
        {
            "Title": "Mission"
        },
        {
            "Title": "DT"
        },
        {
            "Title": "Presentation"
        },
        {
            "Title": "Status"
        },
        {
            "Title": "Attitude"
        },
        {
            "Title": "Assignment"
        },
        {
            "Title": "Note"
        },
        {
            "Title": "Progress"
        }
    ]

    return (
        <View>
        <ScrollView>
        <View style={styles.container}>
            <LinearGradient
                colors={['#33849B', '#1E4F5D', '#14343D']}
                style={styles.background}
            />
            <View>
                <Header/>
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
                    classAttendanceList.map((item, index) => (
                        <View style={styles.btn1} key={index}>
                            <Text style={styles.attendance}>{item.Title}</Text>
                            <View style={styles.dropdownIcon}>
                                <Image source={require('../assets/deopdownicon.png')}/>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
        </ScrollView>
        <Footer enabled={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:110,
        flex: 1,
        backgroundColor: '#2A5A56',
    },
    paragraph: {
        alignSelf: 'flex-end',
        marginTop: 50,
        fontSize: 20,
        marginRight: 30,
        color: 'white'
    },
    main: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    classroomName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
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
        alignSelf: 'center',
        backgroundColor: '#3589A1',
        marginTop: 5,
        width: '90%',
        color: 'white',
        padding: 6,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btn2: {
        paddingTop: 20,
        paddingBottom:30
    },
    attendance: {
        color: 'white',
        fontSize: 18,
    },
    dropdownIcon: {
        marginRight: 10,
        marginTop: 3
    }
});
export default ClassAttendance;
