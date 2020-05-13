import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserBoard from './UserBoard'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                {Object.keys(users).map((id) => (
                    <UserBoard user={users[id]} />
                ))}
            </div>
        )
    }
}
  
function mapStateToProps ({ authedUser, users }) {
    const sortedusers = Object.keys(users)
                              .sort((a, b) => (
                                  (users[b].questions.length + Object.keys(users[b].answers).length)
                                  - (users[a].questions.length + Object.keys(users[a].answers).length)))
                              .map((key) => users[key])
    return {
        authedUser,
        users: sortedusers
    }
}

export default connect(mapStateToProps)(LeaderBoard);
  