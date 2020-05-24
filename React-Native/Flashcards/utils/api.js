import { AsyncStorage } from 'react-native'
import { FLASHCARD_STORAGE_KEY, formatFlashcardResults } from './_flashcards'

export function fetchFlashcardResults () {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(formatFlashcardResults)
}

export function submitDeck ({ key, deck }) {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [key]: deck,
    }))
}

export function removeDeck (key) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
        })
}