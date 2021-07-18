import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.textView}>
            <View style={styles.locat}>
                <Text style={styles.mainText}>Zip Code is {props.zipCode}</Text>
            </View >
            <Text style={styles.tempText}>{props.temp} °C</Text>
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