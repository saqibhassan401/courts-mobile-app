import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";


const NotesEdit = (navigation) => {
    const [Date, onChangeDate] = React.useState('Date');
    const [Time, onChangeTime] = React.useState('Time');
    const [Subject, onChangeSubject] = React.useState('Subject');
    const [Title, onChangeTitle] = React.useState('Title');
    const [TextBox, onChangeTextBox] = React.useState('Write Something');

    return (
        <MainLayout>
        <View style={styles.container}>
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
        </View>
        </MainLayout>
    );
}


export default NotesEdit;
