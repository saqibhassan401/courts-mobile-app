import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import axios from 'axios';
import { Config } from './config/config';
import Login from './components/login';
import TestResults from './components/TestResults';
import TestType from './components/TestType';
import NotesList from "./components/NotesList";
import NotesEdit from "./components/NotesEdit";
import SchoolTest from './components/SchoolTest';
import SchoolTestDetail from './components/SchoolTestDetail';
import ClassAttendance from "./components/ClassAttendance";
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
axios.defaults.baseURL = Config.api_url;

export default function App(props) {
    const [isSignedIn,setIsSignedIn] = useState()

    useEffect(()=> {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key')
                console.log(value)
                setIsSignedIn(value)
                if (value !== null) {
                    // value previously stored
                }
            } catch (e) {
                // error reading value
            }
        }
        getData()
    })

    console.log(isSignedIn)

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                        <Stack.Screen
                            name="login"
                            component={Login}
                        />
                        <Stack.Screen
                            name="TestResults"
                            component={TestResults}
                        />
                        <Stack.Screen
                            name="TestType"
                            component={TestType}
                        />
                        <Stack.Screen
                            name="NotesList"
                            component={NotesList}
                        />
                        <Stack.Screen
                            name="SchoolTest"
                            component={SchoolTest}
                        />
                        <Stack.Screen
                            name="SchoolTestDetail"
                            component={SchoolTestDetail}
                        />
                        <Stack.Screen
                            name="ClassAttendance"
                            component={ClassAttendance}
                        />
                        <Stack.Screen
                            name="NotesEdit"
                            component={NotesEdit}
                        />
                        <Stack.Screen
                            name="ResetPassword"
                            component={ResetPassword}
                        />
                        <Stack.Screen
                            name='Footer'
                            component={Footer}
                        />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
