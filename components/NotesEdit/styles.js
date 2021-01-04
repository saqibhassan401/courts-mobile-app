import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    main: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    inputP: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputFields: {
        alignItems: 'center',
        backgroundColor: '#1B5573',
        marginTop: 30,
    },
    Inputs: {
        marginTop: 15,
        backgroundColor: '#94CAD1',
        color: '#767B7B',
        padding: 10,
        width: "45%",
        marginLeft: 10
    },
    InputSubject: {
        marginTop: 15,
        backgroundColor: '#94CAD1',
        color: '#767B7B',
        padding: 10,
        width: "92%",
        marginLeft: 10
    },
    InputBox: {
        textAlignVertical: 'top',
        marginTop: 15,
        backgroundColor: 'white',
        color: '#767B7B',
        padding: 10,
        width: "92%",
        height: '50%',
        marginLeft: 10
    }
});

export default styles
