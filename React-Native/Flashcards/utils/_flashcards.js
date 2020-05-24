  import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Flashcards:flashcards'

function setDummyData () {
    const dummyData = {
        deck1: {
            deckTitle: 'React Native',
            cards: {
                card1: {
                    question: 'How does the learn once, write anywhere approach influence development?',
                    answer: 'Learning React allows us to use the same principles to develop for both web and native platforms'
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