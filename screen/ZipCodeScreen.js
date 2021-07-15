import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text ,FlatList, StatusBar, TouchableHighlight } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={()=>{
        navigation.navigate('Weather',{zipCode:code})
    }}>
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    );
}