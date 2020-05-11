import React, { Component } from 'react'
import QuestionPage from './QuestionPage'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'

class Dashboard extends Component {

    render() {
        const { unansweredId, answeredId } = this.props
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

function mapStateToProps ({ authedUser, users, questions }) {
    const sortedQuestions = Object.keys(questions)
                                  .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const user = users[authedUser];
    let answeredIds = [];

    if (user !== undefined) {
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
  