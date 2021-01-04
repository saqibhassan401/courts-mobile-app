import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import MainLayout from "../../shared/layout/mainLayout";

const TestType = () => {

    const items = [
        {
            'Test':"13123",
            'TestName':'Calculus',
            'TestDate':'20201123'
        },
        {
            'Test':"42343",
            'TestName':'Algebra',
            'TestDate':'20201123'
        },
        {
            'Test':"12323",
            'TestName':'Integral',
            'TestDate':'20201123'
        },
        {
            'Test':"43553",
            'TestName':'Derivation',
            'TestDate':'20201123'
        },
        {
            'Test':"456456",
            'TestName':'Calculus',
            'TestDate':'20201123'
        },
        {
            'Test':"657567",
            'TestName':'Calculus',
            'TestDate':'20201123'
        },
    ]
    return (
        <MainLayout>
        <View style={styles.container}>
            <View>
                <Text style={styles.main}>
                    Test Type
                </Text>
            </View>
            <View>
                <View style={styles.btn1} >
                    <Text style={styles.Test}>Test #</Text>
                    <Text style={styles.Test}>Test Name</Text>
                    <Text style={styles.Test}>Test Date</Text>
                </View>
                {
                    items.map((item,index)=>(
                        <View style={styles.btn2} key={index} >
                            <Text style={styles.Test2}>{item.Test}</Text>
                            <Text style={styles.Test2}>{item.TestName}</Text>
                            <Text style={styles.Test2}>{item.TestDate}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
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
    btn: {
        marginTop: 10
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 40,
        paddingLeft:10,
        paddingRight:10,
        fontWeight: "bold"
    },
    btn2:{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        fontWeight: "bold"
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    Test:{
     color:'white',
        backgroundColor: '#94CAD1',
        padding:9,
        width:'30%',
        fontSize:18
    },
    Test2:{
        color:'white',
        backgroundColor: '#3589A1',
        padding:9,
        width:'30%',
        fontSize:18
    }
});
export default TestType;
