import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainLayout from "../../shared/layout/mainLayout";
import styles from "./styles";

const ResetPassword = ({navigation}) => {
    const [currentPassword, onChangecurrentPassword] = React.useState('Current Password');
    const [NewPassword, onChangeNewPassword] = React.useState('New Password');
    const [RePassword, onChangeRePassword] = React.useState('Re-enter Password');

    return (
        <MainLayout navigation={navigation}>
        <View style={styles.container}>
            <Text style={styles.main}>
                USER {"\n"}
                INFORMATION
            </Text>
            <Text style={styles.ChangePasswordText}>
                Please change your password
            </Text>
            <View style={styles.InputFields}>
                <View style={styles.image}>
                    <Image source={require('../../assets/padlock.png')}/>
                    <TextInput
                        style={styles.Inputs}
                        onChangeText={text => currentPassword(text)}
                        value={currentPassword}
                    />
                </View>
                <View style={styles.image}>
                    <Image source={require('../../assets/padlock.png')}/>
                    <TextInput
                        style={styles.Inputs}
                        onChangeText={text => onChangeNewPassword(text)}
                        value={NewPassword}
                    />
                </View>
                <View style={styles.image}>
                    <Image source={require('../../assets/padlock.png')}/>
                    <TextInput
                        style={styles.Inputs}
                        onChangeText={text => onChangeRePassword(text)}
                        value={RePassword}
                    />
                </View>
                <TouchableOpacity onPress={() => signIn()} style={styles.confirmButton}>
                    <Text style={styles.loginText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
        </MainLayout>

    );
}


export default ResetPassword;
