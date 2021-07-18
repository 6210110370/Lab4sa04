import React from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';

export default function Forecast(props) {

    const img = 'http://openweathermap.org/img/wn/'+props.icon+'.png'
    return (
        <View style={styles.textView}>
            <View style={styles.locat}>
                <Text style={styles.txtCountry}>{props.country}</Text> 
                <Text style={styles.descriptionText}>Zip Code is {props.zipCode}</Text>
            </View >
            <Text style={styles.tempText}>{props.temp} °C</Text>
            <View style={styles.weaters}>
                <Image source={{uri: img}}
                            style={{width: 100, height: 100}} />
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
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    txtCountry : {
        fontSize: 48,
        color: 'white',
        margin: 30,
        margin: 10,
    },
    tempText:{
        flexDirection: 'row',
        fontSize: 72,
        color: 'white',
    },
    weaters: {
        backgroundColor: 'rgba(100, 100, 100, 0.6)',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderRadius: 5,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    mainText:{
        fontSize: 30,
        color: 'white',
    },
    descriptionText:{
        color: 'white',
    },

});