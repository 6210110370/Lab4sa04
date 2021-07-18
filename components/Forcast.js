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
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
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