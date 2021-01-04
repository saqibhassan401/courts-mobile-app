import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/footer";
import {LinearGradient} from "expo-linear-gradient";
import styles from './styles';


const MainLayout = ({children, navigation})=>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient
                colors={['#33849B', '#1E4F5D', '#14343D']}
                style={styles.background}
            />
        <Header/>
            {children}
        <Footer navigation={navigation}/>
        </SafeAreaView>
    )
}

export default MainLayout

