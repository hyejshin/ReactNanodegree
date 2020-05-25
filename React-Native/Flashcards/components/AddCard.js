import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { addCard } from '../actions'
import { submitCard } from '../utils/api'
import { getCardData } from '../utils/helpers'
import styles from '../styles/AddCardStyle'

const AddCard = (props) => {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    onSubmitHandler = () => {
        const { dispatch, deckId, navigation } = props
        const card = getCardData(question, answer)
        const decks = dispatch(addCard(deckId, card))
        submitCard({ deckId, decks })
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
                disabled={question === '' || answer === ''}
                style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps (deck, { navigation }) {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck,
    }
}

export default connect(mapStateToProps)(AddCard)