import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient} from "expo-linear-gradient";
import Header from "./header";
import Footer from "./footer";

const NotesList = (props) => {
    return (
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
                    Note
                </Text>
            </View>
            <View style={styles.inputP}>
                <TouchableOpacity  style={styles.assignmentSection}>
                    <Text style={styles.assignmentSectionText}>2020.09.15</Text>
                    <Text style={styles.assignmentSectionText}>[Calsulus] First Assignments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assignmentSection}>
                    <Text style={styles.assignmentSectionText}>2020.09.15</Text>
                    <Text style={styles.assignmentSectionText}>[Calsulus] First Assignments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assignmentSection}>
                    <Text style={styles.assignmentSectionText}>2020.09.15</Text>
                    <Text style={styles.assignmentSectionText}>[Calsulus] First Assignments</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.assignmentSection}>
                    <Text style={styles.assignmentSectionText}>2020.09.15</Text>
                    <Text style={styles.assignmentSectionText}>[Calsulus] First Assignments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assignmentSection}>
                    <Text style={styles.assignmentSectionText}>2020.09.15</Text>
                    <Text style={styles.assignmentSectionText}>[Calsulus] First Assignments</Text>
                </TouchableOpacity>
                <View style={styles.pagination}>
                    <Text style={styles.assignmentSectionText}>1 2 3 ...> 10</Text>
                </View>
            </View>
            <Footer/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    input1: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginTop: 50,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    inputP: {
        backgroundColor: '#307E94',
        marginTop: 30,
    },
    assignmentSection: {
        alignSelf: 'center',
        backgroundColor: '#94CAD1',
        marginTop: 20,
        width: '95%',
        paddingBottom: 10
    },
    assignmentSectionText: {
        marginTop: 8,
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    pagination: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default NotesList;
