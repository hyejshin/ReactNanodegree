import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { pastelYellow, red, summerBlue, white } from '../utils/colors'

const Deck = () => {
    addCardHandler = () => {
        console.log('add')
    }
    startQuizHandler = () => {
        console.log('start')
    }
    deleteHandler = () => {
        console.log('delete')
    }
    return (
        <View>
            <View style={styles.deck}>
                <Text style={styles.deckTitle}>Deck Title</Text>
                <Text style={styles.deckInfo}>3 cards</Text>
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
        alignItems: 'center'
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
        alignItems: 'center'
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


export default Deck