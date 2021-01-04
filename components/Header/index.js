import * as React from 'react';
import {Image,Text, View} from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                <Image source={require('../../assets/user.png')}/>
                Brian
            </Text>
        </View>
    );
}

export default Header;
