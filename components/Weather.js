import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import Forecast from './Forcast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        country: 'test',
        main: 'main',
        description: 'description',
        temp: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=95e27ab92122f92065a2b53bc23b5503`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        ...forecastInfo,
                        country: json.name,
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
                    <Forecast {...forecastInfo} zipCode={props.zipCode} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },

    contain: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: '90%',
        height: '90%',
        padding: 40,
        borderRadius: 10
    },

    text: {
        color: 'white',
    },

});