import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { pastelYellow, blue, summerBlue, white } from '../utils/colors'

const AddDeck = () => {
    const [title, setTitle] = React.useState('');
    onSubmitHandler = () => {
        console.log(title)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is the title of your new deck?</Text>
            <TextInput 
                style={styles.textField}
                value={title}
                onChangeText={text => setTitle(text)} />
            <TouchableOpacity
                onPress={onSubmitHandler}
                style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    text: {
        fontSize: 32,
        textAlign: 'center'
    },
    textField: {
        marginTop: 50,
        marginBottom: 100,
        borderColor: summerBlue,
        borderWidth: 1,
        borderRadius: 2,
        padding: 4,
        width: 300,
        fontSize: 24
    },
    submitBtn: {
        backgroundColor: summerBlue,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})


export default AddDeck