import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.mainText}>{props.main}</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>
        <View style={styles.temp}>
            <Text style={styles.tempText}>{props.temp}</Text>
            <Text style={styles.celText}>°C</Text>
        </View>
    </View >
    );
}
const styles = StyleSheet.create({
    mainText:{
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 30,
        color: 'white',
        marginTop: 20
    },
    descriptionText:{
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        marginTop: 20
    },
    temp:{
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        marginTop: 20
    },
    tempText:{
        fontSize: 30,
        color: 'white',
    },
    celText:{
        textAlignVertical: 'center',
        color: 'white'
    },

});