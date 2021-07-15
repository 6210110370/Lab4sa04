import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=7d63bcc40ca31f4ddf07e5daa47633b6`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

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

    contain: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width: '100%',
        padding: 30
    },

    text: {
        color: 'white',
    },

});