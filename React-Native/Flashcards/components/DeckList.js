import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchFlashcardResults } from '../utils/api'
import { receiveDecks } from '../actions'
import styles from '../styles/DeckListStyle'

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
                <ScrollView style={{width: '100%'}}>
                {
                    Object.keys(decks).map((key) => (
                        <TouchableOpacity style={styles.deck} onPress={() => this.onDetail(key)} key={key}>
                            <Text style={styles.deckTitle}>{decks[key].deckTitle}</Text>
                            <Text style={styles.deckInfo}>{Object.keys(decks[key].cards).length} cards</Text>
                        </TouchableOpacity>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)