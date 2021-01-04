import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import axios from 'axios'
import {Config} from "../../config/config";
import MainLayout from "../../shared/layout/mainLayout";
import styles from './styles';
import * as SecureStore from 'expo-secure-store';

axios.defaults.baseURL = Config.api_url;

const ClassAttendance = ({navigation}) => {
    const [attendance, setAttendance] = React.useState(null);

    const classAttendanceList = [
        {
            name: "attendance",
            "Title": "Attendance"
        },
        {
            name: "homework",
            "Title": "Homework"
        },
        {
            name: "answers",
            "Title": "Answers"
        },
        {
            name: "binder",
            "Title": "Binder"
        },
        {
            name: "DT",
            "Title": "DT"
        },
        {
            name: "mission",
            "Title": "Mission"
        },
        {
            name: "DT",
            "Title": "DT"
        },
        {
            name: "presentation",
            "Title": "Presentation"
        },
        {
            name: "status",
            "Title": "Status"
        },
        {
            name: "attitude",
            "Title": "Attitude"
        },
        {
            name: "assignment",
            "Title": "Assignment"
        },
        {
            name: "note",
            "Title": "Note"
        },
        {
            name: "progress",
            "Title": "Progress"
        }
    ]

    React.useEffect(async () => {
        let userId = await SecureStore.getItemAsync('id')
        axios
            .post(`/attendance/student`, {
                "student": userId
            })
            .then(({ data }) => {
                        setAttendance(data.attendance);
                        setLoaded(true);
            })
            .catch((error) => {
                setError(t('An error occured in the server'));
            });
    }, []);

    return (
        <MainLayout navigation={navigation}>
        <ScrollView>
        <View style={styles.container}>
            <View>
                {/*{!!error && (*/}
                {/*    <Alert*/}
                {/*        className={classes.alert}*/}
                {/*        style={{ margin: 'auto' }}*/}
                {/*        variant="filled"*/}
                {/*        severity="error"*/}
                {/*    >*/}
                {/*        {error}*/}
                {/*    </Alert>*/}
                {/*)}*/}
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
                                <Text style={styles.attendance}>{attendance && attendance[item.name]}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
            {/*{!attendance && loaded && (*/}
            {/*    <Alert*/}
            {/*        className={classes.alert}*/}
            {/*        style={{ margin: '100px auto' }}*/}
            {/*        variant="filled"*/}
            {/*        severity="error"*/}
            {/*    >*/}
            {/*        {t('there is no attendance created for this date')}.*/}
            {/*    </Alert>*/}
            {/*)}*/}
        </ScrollView>
        </MainLayout>
    );
}

export default ClassAttendance;
