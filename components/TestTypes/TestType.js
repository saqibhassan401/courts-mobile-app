import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";

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


export default TestType;
