import React, { Component } from 'react'
import QuestionPage from './QuestionPage'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'

class Dashboard extends Component {

    render() {
        const { questions, users, unansweredId, answeredId } = this.props
        console.log('unansweredId', unansweredId)
        console.log('answeredId', answeredId)
        return (
            <div>
                <Tabs defaultActiveKey="unanswered">
                <Tab eventKey="unanswered" title="Unanswered Question">
                    {unansweredId.map((id) => (
                        <QuestionPage key={id} id={id}/>
                    ))}
                </Tab>
                <Tab eventKey="answered" title="Answered Question">
                    {answeredId.map((id) => (
                        <QuestionPage key={id} id={id}/>
                    ))}
                </Tab>
                </Tabs>
                
            </div>
        )
    }
}
// johndoe: {
//     id: 'johndoe',
//     name: 'John Doe',
//     avatarURL: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
//     answers: {
//       "xj352vofupe1dqz9emx13r": 'optionOne',
//       "vthrdm985a262al8qx3do": 'optionTwo',
//       "6ni6ok3ym7mf1p33lnez": 'optionTwo'
//     },
//     questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
//   }

function mapStateToProps ({ authedUser, users, questions }) {
    authedUser = 'hyejshin'
    const sortedQuestions = Object.keys(questions)
                                  .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const user = users[authedUser];
    let answeredIds = [];

    if (user != undefined) {
        const answeredQuestions = users[authedUser].answers;
        answeredIds = Object.keys(answeredQuestions);
    }

    return {
        authedUser,
        users,
        unansweredId: sortedQuestions.filter((id) => !answeredIds.includes(id)),
        answeredId: sortedQuestions.filter((id) => answeredIds.includes(id)),
    }
}


export default connect(mapStateToProps)(Dashboard);
  