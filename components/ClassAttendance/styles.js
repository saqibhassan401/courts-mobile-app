import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingBottom:110,
        flex: 1,
    },
    paragraph: {
        alignSelf: 'flex-end',
        marginTop: 50,
        fontSize: 20,
        marginRight: 30,
        color: 'white'
    },
    main: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 35,
        color: 'white',
        fontWeight: "bold"
    },
    classroomName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    btn: {
        marginTop: 10
    },
    btn1: {
        alignSelf: 'center',
        backgroundColor: '#3589A1',
        marginTop: 5,
        width: '90%',
        color: 'white',
        padding: 6,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    btn2: {
        paddingTop: 20,
        paddingBottom:30
    },
    attendance: {
        color: 'white',
        fontSize: 18,
    },
    dropdownIcon: {
        marginRight: 10,
        marginTop: 3
    }
});

export default styles;
