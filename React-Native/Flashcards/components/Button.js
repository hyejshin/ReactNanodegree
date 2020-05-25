import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Button(props) {
    return(
        <TouchableOpacity
            onPress={props.onPressHandler}
            style={props.buttonStyle}>
                <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}