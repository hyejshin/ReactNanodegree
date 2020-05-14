import React, { Component } from 'react'
import { Card, ListGroup, Badge } from 'react-bootstrap'

class UserBoard extends Component {
    render() {
        const { user } = this.props
        const questions = Object.keys(user.answers).length
        const answers = user.questions.length
        return (
            <Card border="success">
            <Card.Header><h3>{user.name}</h3></Card.Header>
            <Card.Body>
                <img className="avatar" src={user.avatarURL} alt="avatar"/>
                <div className="userinfo">
                    <h5>Score <Badge variant="success">{questions + answers}</Badge></h5>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>
                                Answered questions: {questions}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Created questions: {answers}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </div>
            </Card.Body>
            </Card>
        )
    }
}

export default UserBoard;
  