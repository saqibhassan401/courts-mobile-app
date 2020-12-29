import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import {BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text></Text>;
const AlbumsRoute = () => <Text></Text>;
const RecentsRoute = () => <Text></Text>;

const TestType = () => {
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
                    Test Type
                </Text>
            </View>
            <View>
                <View style={styles.fixToText}>
                    <View>
                        <Button style={styles.btn3}
                                title="Left btunn"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        title="Left btunn"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                <View style={styles.fixToText}>
                    <View>
                        <Button style={styles.btn3}
                                title="Left btunn"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        title="Left btunn"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                <View style={styles.fixToText}>
                    <View>
                        <Button style={styles.btn3}
                                title="Left btunn"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        title="Left btunn"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>

                <View style={styles.fixToText}>
                    <View>
                        <Button style={styles.btn3}
                                title="Left btunn"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        title="Left btunn"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
                <View style={styles.fixToText}>
                    <View>
                        <Button style={styles.btn3}
                                title="Left btunn"
                                onPress={() => Alert.alert('Left button pressed')}
                        />
                    </View>
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        title="Left btunn"
                        onPress={() => Alert.alert('Right button pressed')}
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
        padding: 8,
    },
    paragraph: {
        textAlign: 'right',
        marginTop: '5px',
        fontSize: '20px'
    },
    main: {
        textAlign: 'center',
        marginTop: '100px',
        fontSize: '24px'
    },
    btn: {
        marginTop: '10px'
    },
    btn1: {
        marginTop: '90px'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px'


    },
    btn3: {},
});
export default TestType;