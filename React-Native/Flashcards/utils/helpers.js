
export function getDeckData (title) {
    return ({
        deckTitle: title,
        cards: { }
    })
}

export function getCardData (question, asnwer) {
    return ({
        id: generateUID(),
        question: question,
        asnwer: asnwer
    })
}

export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}