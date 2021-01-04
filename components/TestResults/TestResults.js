import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import MainLayout from "../../shared/layout/mainLayout";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    paragraph: {
        alignSelf: 'flex-end',
        fontSize: 20,
        marginRight: 30,
        color: 'white'
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
        fontSize: 35,
        fontWeight: "bold",
        color: 'white'
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        marginTop: 90
    },
    Atest: {
        alignSelf: 'center',
        backgroundColor: '#2DC2CB',
        marginTop: 5,
        width: '90%',
        color: 'white',
        padding: 6,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    Stest: {
        alignSelf: 'center',
        backgroundColor: '#3589A1',
        marginTop: 25,
        width: '90%',
        color: 'white',
        padding: 6,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    Atest1: {
        color: 'white',
        width: '100%',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    Stest1: {
        textAlign: 'center',
        fontSize: 20,
        width: '100%',
        color: 'white',
        padding: 10,
    }
});
export default TestResults;
