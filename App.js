import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import axios from 'axios';
import { Config } from './config';
import Login from './components/login';
import TestResults from './components/TestResults';
import TestType from './components/TestType';
import NotesList from "./components/NotesList";
import NotesEdit from "./components/NotesEdit";
import SchoolTest from './components/SchoolTest';
import SchoolTestDetail from './components/SchoolTestDetail';
import ClassAttendance from "./components/ClassAttendance";
import ResetPassword from "./components/ResetPassword";
axios.defaults.baseURL = Config.api_url;
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="login"
                    component={SchoolTest}
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

            </Stack.Navigator>
        </NavigationContainer>
    );
}
