import * as React from 'react';
import {Image, StyleSheet,ScrollView, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Header from "./header";
import Footer from "./footer";

const ClassAttendance = () => {

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
                    SCHOOL TEST
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
            <View style={styles.btn1}>
                <View style={styles.dropdownIcon}>
                    <Image source={require('../assets/deopdownicon.png')}/>
                </View>
                <Text style={styles.testScore}>
                    Check my test score
                </Text>
            </View>
            <View style={styles.evaluation}>
                <View style={styles.dropdownIcon}>
                    <Image source={require('../assets/deopdownicon.png')}/>
                </View>
                <Text style={styles.testScore}>
                    Evaluation (wt,ct,mt)
                </Text>
            </View>
            <View>
                <View style={styles.test1}>
                    <Text style={styles.test}>
                        Test A
                    </Text>
                    <Text style={styles.test}>
                        Test B
                    </Text>
                </View>
                <View style={styles.test2}>
                    <Text style={styles.test}>
                        My score {"\n"}
                        Class agregate
                    </Text>
                    <Text style={styles.test}>
                        My score {"\n"}
                        Class agregate
                    </Text>
                </View>
            </View>
            <Text style={styles.noteText}>
                Note
            </Text>
            <View style={styles.Note}>
            </View>
        </View>
        </ScrollView>
        <Footer/>
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
        marginTop: 30,
        fontSize: 20,
        marginRight: 30,
        color: 'white'
    },
    main: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    noteText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    Note: {
        backgroundColor: '#29697B',
        width: '90%',
        height:250,
        alignSelf: 'center',
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
        width: '90%',
        color: 'white',
        marginTop: 20,
        padding: 6,
        alignSelf: 'center',
        backgroundColor: '#05345C',
        flexDirection: 'row',
    },
    evaluation: {
        width: '90%',
        color: 'white',
        marginTop: 20,
        padding: 6,
        alignSelf: 'center',
        backgroundColor: '#3589A1',
        flexDirection: 'row',
    },
    test1: {
        width: '90%',
        color: 'white',
        marginTop: 5,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    test2:{
        paddingTop: 5,
        width: '90%',
        color: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    testScore: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 40
    },
    test: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#3589A1',
        textAlign: 'center',
        padding: 6,
        marginRight: 5,
        width: '49.5%'
    },
    dropdownIcon: {
        marginRight: 10,
        marginTop: 3,
        marginLeft: 50
    },

});
export default ClassAttendance;
