import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { pastelYellow, blue, summerBlue, white } from '../utils/colors'

const AddCard = () => {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    onSubmitHandler = () => {
        console.log(question)
        console.log(answer)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textField}
                placeholder='Question'
                value={question}
                onChangeText={text => setQuestion(text)} />
            <TextInput 
                style={styles.textField}
                placeholder='Answer'
                value={answer}
                onChangeText={text => setAnswer(text)} />
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
    textField: {
        margin: 10,
        borderColor: summerBlue,
        borderWidth: 1,
        borderRadius: 2,
        padding: 4,
        width: 300,
        fontSize: 24
    },
    submitBtn: {
        marginTop: 200,
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


export default AddCard