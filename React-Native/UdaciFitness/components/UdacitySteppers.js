import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciSlider ({ max, unit, step, value, onIncrement, onDecrement }) {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={onDecrement}>
                    <FontAwesome name='minus' size={36} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onIncrement}>
                    <FontAwesome name='plus' size={36} color={'black'} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}