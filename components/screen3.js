import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import {BottomNavigation,DataTable } from 'react-native-paper';
const MusicRoute = () => <Text></Text>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text></Text>;
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
                    <View  >
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
                    <View  >
                        <Button style={styles.btn3}
                                title="20203541000"
                                onPress={() => Alert.alert('Right button pressed')}
                        />
                    </View>
                </View>
                <View style={styles.emptyflex} >
                    <Text style = {styles.text1}>
                        Button
                    </Text>
                    <Text style = {styles.text2}>
                        Button
                    </Text>
                </View>
                <View style={styles.note} >
                    <Text >Note
                    </Text>

                </View>
                <View style={styles.textAreaContainer} >
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
    textAreaContainer: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        backgroundColor:'white',
        width:'233px',
        marginLeft:'33px',
        marginBottom:'10px'

    },
    textArea: {
        height: 120,
        justifyContent:'center',

    },
    note: {
        marginLeft:'40px',
        marginTop:'5px',
        fontSize:'20px'
    },
    main:{
        textAlign:'center',
        marginTop:'30px',
        fontSize:'28px'
    },
    btn:{
        marginTop:'10px'
    },
    btn1:{
        marginTop:'90px'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:'5px',
        marginTop:'14px',



    },
    fixToText1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:'5px',
        marginTop:'5px',



    },
    fixTo1: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:'5px',
        marginTop:'1px',



    },
    emptyflex:{
        flexDirection: 'row',
        justifyContent:'center'

    },
    text1:{
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red',
        width:'120px',
        height:'60px'
    },
    text2:{
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'grey',
        marginLeft:'4px',
        width:'105px',
        height:'60px',
        marginBottom:'5px'

    },
    main1:{
        textAlign:'center',

        fontSize:'14px'
    },
    main2:{
        textAlign:'center',
        marginTop:'2px',
        fontSize:'14px'
    },
    btn4:{
        marginRight:'10px'
    },
    btn5:{
        width:'250px',
        height:'200px',

    },
    mainbtn: {
        width:'233px',
        marginLeft:'35px'
    }
});
export default App;