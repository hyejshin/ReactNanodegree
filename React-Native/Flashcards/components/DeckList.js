import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { pastelYellow, blue, summerBlue, white } from '../utils/colors'

class DeckList extends Component {

    render() {
        return (
            <View>
                <View style={styles.deck}>
                    <Text style={styles.deckTitle}>Deck1</Text>
                    <Text style={styles.deckInfo}>3 cards</Text>
                </View>
                <View style={styles.deck}>
                    <Text style={styles.deckTitle}>Deck2</Text>
                    <Text style={styles.deckInfo}>6 cards</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    deck: {
        backgroundColor: '#177CB0',
        borderColor: blue,
        borderRadius: 2,
        padding: 10,
        margin: 10,
        width: 300
    },
    deckTitle: {
        fontSize: 36,
        color: pastelYellow,
        paddingTop: 10,
        paddingBottom: 10
    },
    deckInfo: {
        fontSize: 24,
        color: white,
        paddingBottom: 30
    }
})


export default DeckList