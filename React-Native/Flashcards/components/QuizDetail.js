import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { black } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import Button from './Button'
import styles from '../styles/QuizDetailStyle'

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
        this.props.navigation.goBack()
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
                        <Button onPressHandler={this.onStartHandler}
                                buttonStyle={styles.startButton}
                                textStyle={styles.submitBtnText}
                                text='Start the Quiz'/>
                        <Button onPressHandler={this.onBackHandler}
                                buttonStyle={styles.deckButton}
                                textStyle={[styles.submitBtnText, {color: black}]}
                                text='Back to deck'/>
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
                    <Button onPressHandler={() => this.onSubmitHandler(true)}
                            buttonStyle={styles.correctBtn}
                            textStyle={styles.submitBtnText}
                            text='Correct'/>
                    <Button onPressHandler={() => this.onSubmitHandler(false)}
                            buttonStyle={styles.incorrectBtn}
                            textStyle={styles.submitBtnText}
                            text='Incorrect'/>
                </View>
            </View>
        )
    }
}

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