import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
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
    InputFields: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    confirmButton: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#68C0BE',
    },
    ChangePasswordText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 13,
        color: 'white',
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        marginTop: 90
    },
    inputFields: {
        alignItems: 'center',
        backgroundColor: '#1B5573',
        marginTop: 30,
    },
    image: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 10,
        paddingTop: 35
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
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    Inputs: {
        color: 'white',
        width: "80%",
        paddingLeft: 25,
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
