import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Constants from 'expo-constants';
import {BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text></Text>;
const AlbumsRoute = () => <Text></Text>;
const RecentsRoute = () => <Text></Text>;

const SchoolTest = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'music', title: 'Music', icon: 'queue-music'},
        {key: 'albums', title: 'Albums', icon: 'album'},
        {key: 'recents', title: 'Recents', icon: 'history'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.paragraph}>
                    Brian
                </Text>
            </View>
            <View>
                <Text style={styles.main}>
                    School Test
                </Text>
                <Text style={styles.main1}>
                    Class Name :LinPm
                </Text>
                <Text style={styles.main2}>
                    December 25-20
                </Text>
            </View>
            <View>
                <View style={styles.fixToText}>
                    <View style={styles.btn4}>
                        <Button style={styles.btn3}
                                title="Midterm Exam"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <View>
                        <Button
                            title="20203541000"
                            onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
                <View style={styles.mainbtn}>

                    <Button
                        title="20203541000"
                        onPress={() => Alert.alert('Right button pressed')}
                    />

                </View>
                <View style={styles.fixToText1}>
                    <View style={styles.btn4}>
                        <Button style={styles.btn3}
                                title="Midterm Exam"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <View>
                        <Button style={styles.btn3}
                                title="20203541000"
                                onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
                <View style={styles.fixTo1}>
                    <View style={styles.btn4}>
                        <Button style={styles.btn3}
                                title="Midterm Exam"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <View>
                        <Button style={styles.btn3}
                                title="20203541000"
                                onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
                <View style={styles.emptyflex}>
                    <Text style={styles.text1}>
                        Button
                    </Text>
                    <Text style={styles.text2}>
                        Button
                    </Text>
                </View>
                <View style={styles.note}>
                    <Text>Note
                    </Text>

                </View>
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
            </View>


            <BottomNavigation
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
    },
    paragraph: {
        textAlign: 'right',
        marginTop: 5,
        fontSize: 20
    },
    textAreaContainer: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        width: 233,
        marginLeft: 33,
        marginBottom: 10

    },
    textArea: {
        height: 120,
        justifyContent: 'center',

    },
    note: {
        marginLeft: 40,
        marginTop: 5,
        fontSize: 20
    },
    main: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 28
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        marginTop: 90
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 14


    },
    fixToText1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5


    },
    fixTo1: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 1


    },
    emptyflex: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    text1: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red',
        width: 120,
        height: 60
    },
    text2: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'grey',
        marginLeft: 4,
        width: 105,
        height: 60,
        marginBottom: 5

    },
    main1: {
        textAlign: 'center',

        fontSize: 14
    },
    main2: {
        textAlign: 'center',
        marginTop: 2,
        fontSize: 14
    },
    btn4: {
        marginRight: 10
    },
    btn5: {
        width: 250,
        height: 200,

    },
    mainbtn: {
        width: 233,
        marginLeft: 35
    }
});
export default SchoolTest;
