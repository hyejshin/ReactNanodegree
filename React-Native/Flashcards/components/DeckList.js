import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pastelYellow, blue, summerBlue, white } from '../utils/colors'
import { fetchFlashcardResults } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        fetchFlashcardResults()
            .then((decks) => dispatch(receiveDecks(decks)))
    }
    onDetail = (key) => {
        this.props.navigation.navigate(
            'EntryDetail',
            { deckId: key }
        )
    }
    render() {
        const { decks } = this.props
        return (
            <View style={styles.container}>
                {
                    Object.keys(decks).map((key) => (
                        <TouchableOpacity style={styles.deck} onPress={() => this.onDetail(key)} key={key}>
                            <Text style={styles.deckTitle}>{decks[key].deckTitle}</Text>
                            <Text style={styles.deckInfo}>{Object.keys(decks[key].cards).length} cards</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
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

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)