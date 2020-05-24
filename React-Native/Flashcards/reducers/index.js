import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case DELETE_DECK:
            const newState = Object.assign({}, state)
            delete newState[action.deckId];
            return newState;
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: {
                        ...state[action.deckId].cards,
                        [action.card.id]: {
                            question: action.card.question,
                            answer: action.card.answer
                        }
                    }
                }
            }
        default:
            return state
    }
}

export default decks