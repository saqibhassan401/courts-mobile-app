import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import {LinearGradient} from 'expo-linear-gradient';
import {Config} from '../../config/config';

axios.defaults.baseURL = Config.api_url;

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [succes, setSucces] = useState('');

    const signIn = () => {
        const data = {
            username: email,
            hash: password,
        };

        axios
            .post(`/student/signin`, data)
            .then(({data}) => {
                if (data) {
                    if (data.success) {
                        SecureStore.setItemAsync('token', data.token);
                        SecureStore.setItemAsync('email', data.user.email);
                        SecureStore.setItemAsync('id', data.user._id);
                        SecureStore.setItemAsync('role', data.user.role);
                        axios.defaults.headers = {
                            Authorization: `Bearer ${data.token}`,
                        };
                        setSucces(true);
                    } else {
                        setError(data.message);
                    }
                }
            })
            .catch((error) => {
                setError('Email or Password are incorrect !');
            });
    };
    if (succes) {
        navigation.navigate('ClassAttendance')
    };
    const ResetPassword =()=>{
        navigation.navigate('ResetPassword')
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#212558', '#204556', '#2A5A56']}
                style={styles.background}
            />
            <Image style={styles.image} source={require('../../assets/icon.png')}/>

            <StatusBar style="light"/>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity onPress={() => signIn()} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.forgotPassword}>
                <Text style={styles.loginText}>Forgot your password ? </Text>
                <TouchableOpacity onPress={() => ResetPassword()} >
                    <Text style={styles.loginText}>Click here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A5A56',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword:{
        paddingTop:20,
        flexDirection:'row'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    image: {
        marginBottom: 40,
        width: 120,
        height: 120,
    },
    error: {
        color: 'red',
        fontWeight: '700',
    },
    inputView: {
        backgroundColor: 'transparent',
        width: '70%',
        height: 45,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: 'white',
    },

    forgot_button: {
        height: 30,
        marginTop: 10,
        color: 'white',
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#68C0BE',
    },
    loginText: {
        color: 'white',
    },
});
