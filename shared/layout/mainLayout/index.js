import * as React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Header from "../../../components/header";
import Footer from "../../../components/footer";


const MainLayout = ({children})=>{
    return (
        <>
        <Header/>
        <View>
            {children}
        </View>
        <Footer/>
        </>
    )
}

export default MainLayout

