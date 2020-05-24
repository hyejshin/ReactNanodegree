import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { pastelYellow, red, summerBlue, white } from '../utils/colors'
import { connect } from 'react-redux'
import { removeDeck } from '../utils/api'
import { deleteDeck } from '../actions'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    deckTitle: {
        fontSize: 36,
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 10,
    },
    deckInfo: {
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 150
    },
    addButton: {
        backgroundColor: pastelYellow,
        height: 50,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: summerBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    startButton: {
        backgroundColor: summerBlue,
        height: 50,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: pastelYellow,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    addBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
    startBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: white
    },
    deleteBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: red,
        marginTop: 20,
    },
})

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