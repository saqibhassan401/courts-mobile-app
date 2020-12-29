import * as React from 'react';
import { Text, View, StyleSheet,Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,BottomNavigation } from 'react-native-paper';
const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;
const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
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
            <View style={styles.btn1}>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <View style={styles.btn} >
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <BottomNavigation
                navigationState={{ index, routes }}
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
        textAlign:'right',
        marginTop:'5px',
        fontSize:'20px'
    },
    main:{
        textAlign:'center',
        marginTop:'100px',
        fontSize:'24px'
    },
    btn:{
        marginTop:'10px'
    },
    btn1:{
        marginTop:'90px'
    }
});
export default App;