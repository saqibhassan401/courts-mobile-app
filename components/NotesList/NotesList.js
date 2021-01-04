import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";


const NotesList = ({navigation}) => {
    return (
        <MainLayout navigation={navigation}>
        <View style={styles.container}>
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
        </View>
        </MainLayout>
    );
}


export default NotesList;
