import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor:'white',
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    selected:{
        backgroundColor:'white',
        opacity: 0.6
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    footer: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignSelf:'center'
    },
    alignImages:{
        paddingBottom:10,
        marginLeft:15,
        marginRight:15,
        marginTop: 15
    },
    image:{
        maxHeight:'50%',
        maxWidth:'50%'
    }
});

export  default styles
