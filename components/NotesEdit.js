import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {LinearGradient} from "expo-linear-gradient";
import {Input} from "react-native-elements";
import Header from "./header";
import Footer from "./footer";

const NotesEdit = (navigation) => {
    const [Date, onChangeDate] = React.useState('Date');
    const [Time, onChangeTime] = React.useState('Time');
    const [Subject, onChangeSubject] = React.useState('Subject');
    const [Title, onChangeTitle] = React.useState('Title');
    const [TextBox, onChangeTextBox] = React.useState('Write Something');

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
            <View style={styles.inputFields}>
                <View style={styles.inputP}>
                    <TextInput
                        style={styles.Inputs}
                        onChangeText={text => onChangeDate(text)}
                        value={Date}
                    />
                    <TextInput
                        style={styles.Inputs}
                        onChangeText={text => onChangeTime(text)}
                        value={Time}
                    />
                </View>
                <TextInput
                    style={styles.InputSubject}
                    onChangeText={text => onChangeSubject(text)}
                    value={Subject}
                />
                <TextInput
                    style={styles.InputSubject}
                    onChangeText={text => onChangeTitle(text)}
                    value={Title}
                />
                <View style={styles.InputBox}>
                    <TextInput
                        onChangeText={text => onChangeTextBox(text)}
                        value={TextBox}
                    />
                </View>
            </View>
            <Footer navigation={navigation}/>
        </View>

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
    main: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    inputP: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputFields: {
        alignItems: 'center',
        backgroundColor: '#1B5573',
        marginTop: 30,
    },
    Inputs: {
        marginTop: 15,
        backgroundColor: '#94CAD1',
        color: '#767B7B',
        padding: 10,
        width: "45%",
        marginLeft: 10
    },
    InputSubject: {
        marginTop: 15,
        backgroundColor: '#94CAD1',
        color: '#767B7B',
        padding: 10,
        width: "92%",
        marginLeft: 10
    },
    InputBox: {
        textAlignVertical: 'top',
        marginTop: 15,
        backgroundColor: 'white',
        color: '#767B7B',
        padding: 10,
        width: "92%",
        height: '50%',
        marginLeft: 10
    }
});
export default NotesEdit;
