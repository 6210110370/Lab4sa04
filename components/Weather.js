import React, { useState } from 'react';
import {ImageBackground, ProgressBarAndroidComponent, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    });

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.infor}>
                    <Text>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'row',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        
    },
    infor: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        color: 'white',
        color: 'red'
    },
});
