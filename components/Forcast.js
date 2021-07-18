import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.textView}>
            <View style={styles.locat}>
                <Text style={styles.txtCountry}>{props.country}</Text> 
                <Text style={styles.descriptionText}>Zip Code is {props.zipCode}</Text>
            </View >
            <View style={styles.temp}>
                <Text style={styles.tempText}>{props.temp} °C</Text>
            </View>
            <View style={styles.weaters}>
                <Text style={styles.mainText}>{props.main}</Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
            </View >
        </View >
    );
}
const styles = StyleSheet.create({
    textView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width:'100%'
    },
    locat: {
        height: '25%',
        backgroundColor: 'green',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtCountry : {
        fontSize: 48,
        color: 'white',
        margin: 30,
        margin: 10,
    },
    weaters: {
        height: '25%',
        backgroundColor: 'green',
        width: '80%'
    },
    mainText:{
        fontSize: 30,
        color: 'white',
    },
    descriptionText:{
        color: 'white',
    },
    tempText:{
        flexDirection: 'row',
        fontSize: 72,
        color: 'white',
    },

});