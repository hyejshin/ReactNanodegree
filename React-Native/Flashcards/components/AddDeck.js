import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'
import { generateUID, getDeckData } from '../utils/helpers'
import styles from '../styles/AddDeckStyle'

const AddDeck = (props) => {
    const [title, setTitle] = React.useState('');
    onSubmitHandler = () => {
        const key = generateUID()
        const deck = getDeckData(title)
        setTitle('')
        props.dispatch(addDeck({
            [key]: deck
        }))
        submitDeck({ key, deck })
        props.navigation.goBack()
        props.navigation.navigate(
            'EntryDetail',
            { deckId: key }
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is the title of your new deck?</Text>
            <TextInput 
                style={styles.textField}
                value={title}
                onChangeText={text => setTitle(text)} />
            <TouchableOpacity
                onPress={onSubmitHandler}
                disabled={title === ''}
                style={styles.submitBtn}>
                    <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


export default connect()(AddDeck)