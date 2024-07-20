// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
    useEffect(() => {

    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/splash-custom.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
