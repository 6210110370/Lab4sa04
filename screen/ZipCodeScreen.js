import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, StatusBar, TouchableHighlight, StyleSheet } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'krabi' , code: '81000'}
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code })
    }} style={zipStyles.rowItm}>
        <View style={zipStyles.zipItm}>
            <Text style={zipStyles.txt}>{place}</Text>
            <Text style={zipStyles.txt}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList style={zipStyles.flatLst}
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) =>
                    <ZipItem {...item} navigation={navigation} />
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}

const zipStyles = StyleSheet.create({
    flatLst: {
        backgroundColor: 'rgba(255, 255, 255,1)',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    rowItm: {
        marginBottom: 5,
        backgroundColor: 'rgb(225, 225,225)'
    },
    zipItm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    txt: {
        fontSize: 24,
    }
});