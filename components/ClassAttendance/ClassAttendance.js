import * as React from 'react';
import {Image, StyleSheet,ScrollView, Text,Alert, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import axios from 'axios'
import {Config} from "../../config/config";
import { getCurrentFormatedDate } from '../../config/utils';
import MainLayout from "../../shared/layout/mainLayout";
import styles from './styles';

axios.defaults.baseURL = Config.api_url;

const ClassAttendance = ({navigation}) => {
    const classAttendanceList = [
        {
            "Title": "Attendance"
        },
        {
            "Title": "Homework"
        },
        {
            "Title": "Answers"
        },
        {
            "Title": "Binder"
        },
        {
            "Title": "DT"
        },
        {
            "Title": "Mission"
        },
        {
            "Title": "DT"
        },
        {
            "Title": "Presentation"
        },
        {
            "Title": "Status"
        },
        {
            "Title": "Attitude"
        },
        {
            "Title": "Assignment"
        },
        {
            "Title": "Note"
        },
        {
            "Title": "Progress"
        }
    ]
    const [date] = React.useState(new Date());
    const [attendance, setAttendance] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);

    const handleAttendanceGet = (date, createNew) => {
        axios
            .post(`/attendance/list`, {
                classroom: '5fee5d0a82c0d73090fa0d06',
                date: getCurrentFormatedDate(date),
                new: createNew,
            })
            .then(({ data }) => {
                if (!!data) {
                    if (data.succes) {
                        setAttendance(data.attendance);
                        setError(false);
                        setLoaded(true);
                    } else {
                        setError(data);
                    }
                }
            })
            .catch((error) => {
                setError(t('An error occured in the server'));
            });
    };
    React.useEffect(() => {
        handleAttendanceGet(date, true);
    }, []);


    console.log('attendance',attendance)

    return (
        <MainLayout navigation={navigation}>
        <ScrollView>
        <View style={styles.container}>
            <View>
                {!!error && (
                    <Alert
                        className={classes.alert}
                        style={{ margin: 'auto' }}
                        variant="filled"
                        severity="error"
                    >
                        {error}
                    </Alert>
                )}
                <Text style={styles.main}>
                    CLASS ATTENDANCE
                </Text>
            </View>
            <View>
                <Text style={styles.classroomName}>
                    Classroom Name: Luxpm
                </Text>
            </View>
            <View>
                <Text style={styles.classroomName}>
                    Dec 20, 2020
                </Text>
            </View>
            <View style={styles.btn2}>
                {
                    classAttendanceList.map((item, index) => (
                        <View style={styles.btn1} key={index}>
                            <Text style={styles.attendance}>{item.Title}</Text>
                            <View style={styles.dropdownIcon}>
                                <Image source={require('../../assets/deopdownicon.png')}/>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
            {!attendance && loaded && (
                <Alert
                    className={classes.alert}
                    style={{ margin: '100px auto' }}
                    variant="filled"
                    severity="error"
                >
                    {t('there is no attendance created for this date')}.
                </Alert>
            )}
        </ScrollView>
        </MainLayout>
    );
}

export default ClassAttendance;
