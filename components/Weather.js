import React, {useState} from 'react';
import {ImageBackground, Text, View, StyleSheet } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.contain}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%'
    },

    contain:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width: '100%',
        padding: 30
    },

    text:{
        color: 'white',
    },

});