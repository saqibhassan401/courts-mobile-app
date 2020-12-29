import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,BottomNavigation } from 'react-native-paper';
const MusicRoute = () => <Text></Text>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text></Text>;
const App = () => {
    const [text, setText] = React.useState('');
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
                    Note
                </Text>
            </View>
            <View style={styles.input1}>
                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1,marginRight:'5px',width:'50%'}}
                    onChangeText={text => onChangeText(text)}

                />
                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, width:'50%' }}
                    onChangeText={text => onChangeText(text)}

                />
            </View>
            <View style={{marginTop:'10px'}}>

                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, }}
                    onChangeText={text => onChangeText(text)}

                />


            </View>
            <View style={{marginTop:'10px'}}>

                <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}

                />


            </View>
            <View style={{marginTop:'10px'}}>

                <TextInput
                    style={{ height: 250, borderColor: 'gray', borderWidth: 1,marginBottom:'10px' }}
                    onChangeText={text => onChangeText(text)}

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
    input1:{
        flexDirection: 'row',
        padding: `5px 10px`,
        justifyContent:'center'
    },
    paragraph: {
        textAlign:'right',
        marginTop:'5px',
        fontSize:'20px'
    },
    main:{
        textAlign:'center',
        marginTop:'30px',
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