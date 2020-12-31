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
import Notes from "./components/Notes";
import SchoolTest from './components/SchoolTest';
import SchoolTestDetail from './components/SchoolTestDetail';
import ClassAttendance from "./components/ClassAttendance";
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
                    name="Notes"
                    component={Notes}
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

            </Stack.Navigator>
        </NavigationContainer>
    );
}
