import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import {BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text></Text>;
const AlbumsRoute = () => <Text></Text>;
const RecentsRoute = () => <Text></Text>;
const SchoolTestDetail = () => {
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
                    Test Results
                </Text>
            </View>
            <View>
                <Text style={styles.text1}>
                </Text>


            </View>
            <View>
                <Text style={styles.text1}>
                </Text>


            </View>
            <View>
                <Text style={styles.text1}>
                </Text>


            </View>
            <View>
                <Text style={styles.text1}>
                </Text>


            </View>
            <View>
                <Text style={styles.text1}>
                </Text>


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
        padding: 8,
    },
    text1: {
        borderWidth: 1,

        borderColor: 'black',
        backgroundColor: 'grey',
        marginLeft: 4,
        width: 310,
        height: 50,
        marginBottom: 1,
        marginTop: 10
    },
    paragraph: {
        textAlign: 'right',
        marginTop: 5,
        fontSize: 20
    },
    main: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 24
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        marginTop: 90
    }
});
export default SchoolTestDetail;