import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    input1: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    inputP: {
        backgroundColor: '#307E94',
        marginTop: 30,
    },
    assignmentSection: {
        alignSelf: 'center',
        backgroundColor: '#94CAD1',
        marginTop: 20,
        width: '95%',
        paddingBottom: 10
    },
    assignmentSectionText: {
        marginTop: 8,
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    pagination: {
        marginTop: 20,
        marginBottom:10,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles
