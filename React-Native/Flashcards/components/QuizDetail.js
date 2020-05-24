import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { pastelYellow, red, green, summerBlue, white, black } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class QuizDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params
        return {
            title: deckTitle
        }
    }
    state = {
        nextPage: 'Answer',
        score: 0,
        index: 0,
    }
    onBtnToggle = () => {
        this.setState((curr) => ({
            nextPage: curr.nextPage === 'Question' ? 'Answer' : 'Question'
        }))
    }
    onSubmitHandler = (answer) => {
        const { nextPage } = this.state
        if(nextPage == 'Answer') {
            return
        }
        if(answer) {
            this.setState((curr) => ({
                score: curr.score + 1,
            })) 
        }
        this.setState((curr) => ({
            index: curr.index + 1,
            nextPage: 'Answer'
        }))
    }
    onStartHandler = () => {
        this.setState(() => ({
            nextPage: 'Answer',
            score: 0,
            index: 0,
        }))
    }
    onBackHandler = () => {
        this.props.navigation.navigate(
            'Home'
        )
    }
    render(){
        const { nextPage, index, score } = this.state
        const { cards, cardsKeys, count} = this.props

        if (count === 0) {
            return (
                <View style={{flex: 1, justifyContent: 'center', margin: 10}}>
                    <Text style={styles.text}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
                </View>
            )
        }
        if (count === index) {
            {
                clearLocalNotification().then(setLocalNotification())
            }
            return (
                <View style={{flex: 1, justifyContent: 'center', margin: 10}}>
                    <Text style={[styles.text, {marginTop: 150}]}>Score: {score} / {count}</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            onPress={() => this.onStartHandler(true)}
                            style={styles.startButton}>
                                <Text style={styles.submitBtnText}>Start the Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onBackHandler(false)}
                            style={styles.deckButton}>
                                <Text style={[styles.submitBtnText, {color: black}]}>Deck List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text>Progress: {index + 1} of {count}</Text>
                <Text style={styles.text}>
                    {nextPage === 'Answer'? cards[cardsKeys[index]].question : cards[cardsKeys[index]].answer}
                </Text>
                <View style={styles.btnContainer}>
                    <Text style={styles.answerBtnText} onPress={this.onBtnToggle}>{nextPage}</Text>
                    <TouchableOpacity
                        onPress={() => this.onSubmitHandler(true)}
                        disabled={nextPage === 'Answer'}
                        style={styles.correctBtn}>
                            <Text style={styles.submitBtnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSubmitHandler(false)}
                        disabled={nextPage === 'Answer'}
                        style={styles.incorrectBtn}>
                            <Text style={styles.submitBtnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150
    },
    text: {
        fontSize: 32,
        textAlign: 'center'
    },
    answerBtnText: {
        fontSize: 22,
        textAlign: 'center',
        color: red,
        marginBottom: 20,
    },
    correctBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: summerBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    incorrectBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        width: 200,
        margin: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: pastelYellow,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    deckButton: {
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
})

function mapStateToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params
    const deck = decks[deckId]
    const title = deck? deck.deckTitle : null
    const count = deck? Object.keys(deck.cards).length : 0
    const cards = deck? deck.cards : null
    const cardsKeys = deck? Object.keys(deck.cards) : []
    return {
        deckId,
        deck,
        title,
        count,
        cards,
        cardsKeys,
    }
}

export default connect(mapStateToProps)(QuizDetail)