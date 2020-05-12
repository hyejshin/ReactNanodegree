import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addUserAnswer } from '../actions/users'
import { receiveQuestions, addQuestionAnswer } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestionAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
        .then(() => {
            dispatch(addQuestionAnswer(authedUser, qid, answer))
            dispatch(addUserAnswer(authedUser, qid, answer))
        })
    }
}