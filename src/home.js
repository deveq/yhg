import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import MainImage from './assets/image/splash_bus.png';

const SplashComponent = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Hello World</Text>
            <Image
                source={MainImage}
                resizeMode={'cover'}
            />
        </View>
    )
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor : '#52B669',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mainText : {
        marginTop: height/3,
        fontSize: 30,

    }

})

export default SplashComponent;