import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { removeDeck } from '../utils/api'
import { deleteDeck } from '../actions'
import styles from '../styles/DeckStyle'

const Deck = (props) => {
    addCardHandler = () => {
        props.navigation.navigate(
            'AddCard',
            { deckId: props.deckId }
        )
    }
    startQuizHandler = () => {
        props.navigation.navigate(
            'QuizDetail',
            { deckId: props.deckId,
              deckTitle: props.title }
        )
    }
    deleteHandler = () => {
        const { deckId, dispatch, navigation } = props
        navigation.goBack()
        dispatch(deleteDeck(deckId))
        removeDeck(deckId)
    }
    return (   
        <View>
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>{props.title}</Text>
                <Text style={styles.deckInfo}>{props.count} cards</Text>
            </View>

            <TouchableOpacity
                onPress={addCardHandler}
                style={styles.addButton}>
                    <Text style={styles.addBtnText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={startQuizHandler}
                style={styles.startButton}>
                    <Text style={styles.startBtnText}>Start Quiz</Text>
            </TouchableOpacity>
            <Text style={styles.deleteBtnText} onPress={deleteHandler}>
                Delete Deck
            </Text>
        </View>
    )
}

function mapStateToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params
    const deck = decks[deckId]
    const title = deck? deck.deckTitle : null
    const count = deck? Object.keys(deck.cards).length : 0
    return {
        deckId,
        deck,
        title,
        count
    }
}

export default connect(mapStateToProps)(Deck)