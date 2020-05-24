import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { pastelYellow, blue, summerBlue, white } from '../utils/colors'
import { addCard } from '../actions'
import { submitDeck } from '../utils/api'
import { getCardData } from '../utils/helpers'

const AddCard = (props) => {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    onSubmitHandler = () => {
        console.log(question)
        console.log(answer)
        const { dispatch, deckId, navigation } = props
        const card = getCardData(question, answer)
        const decks = dispatch(addCard(deckId, card))
        submitDeck({ deckId, decks })
        navigation.goBack()
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

function mapStateToProps (deck, { navigation }) {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck,
    }
}

export default connect(mapStateToProps)(AddCard)