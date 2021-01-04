import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";

const TestResults = ({navigation}) => {
    return (
        <MainLayout navigation={navigation}>
        <View style={styles.container}>
            <View>
                <Text style={styles.main}>
                    Test Results
                </Text>
            </View>
            <View style={styles.btn1}>
                <View style={styles.Atest}>
                    <Text style={styles.Atest1}>Academy Test</Text>
                </View>
                <View style={styles.Stest}>
                    <Text style={styles.Stest1}>School Test</Text>
                </View>
            </View>
        </View>
        </MainLayout>
    );
}


export default TestResults;
