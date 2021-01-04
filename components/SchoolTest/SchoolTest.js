import * as React from 'react';
import {Image, StyleSheet,ScrollView, Text, View} from 'react-native';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";

const ClassTest = (navigation) => {
    return (
        <MainLayout>
        <ScrollView>
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
                    <Image source={require('../../assets/deopdownicon.png')}/>
                </View>
                <Text style={styles.testScore}>
                    Check my test score
                </Text>
            </View>
            <View style={styles.evaluation}>
                <View style={styles.dropdownIcon}>
                    <Image source={require('../../assets/deopdownicon.png')}/>
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
        </ScrollView>
        </MainLayout>
    );
}


export default ClassTest;
