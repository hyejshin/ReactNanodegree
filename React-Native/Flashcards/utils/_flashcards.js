  import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Flashcards:flashcards'

function setDummyData () {
    const dummyData = {
        deck1: {
            deckTitle: 'React Native',
            cards: {
                card1: {
                    question: 'What is true about handling touches in React Native apps?',
                    answer: 'What is true about handling touches in React Native apps?'
                },
                card2: {
                    question: 'What is true about KeyboardAvoidingView?',
                    answer: 'Without KeyboardAvoidingView, the keyboard will pop up hiding text inputs'
                }
            }
        }
    }

    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(dummyData))

    return dummyData
}

export function formatFlashcardResults (results) {
    return results === null
      ? setDummyData()
      : JSON.parse(results)
}