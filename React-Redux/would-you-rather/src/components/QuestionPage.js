import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class QuestionPage extends Component {

    render() {
        const { name, avatarURL, id, text } = this.props;

        return (
            
            <Card border="info" className="card" id={id}>
                <Card.Header><b>{name}</b> asks</Card.Header>
                
                <Card.Body>
                <img className="avatar" src={avatarURL} alt="avatar" />
                <div className="question">
                    <Card.Title>Would You Rather...</Card.Title>
                    <Card.Text>
                        <div>...{text}...</div>
                        <div></div>
                        <Link to={`/question/${id}`} className='question'>
                            <Button className="pollButton" variant="info">ViewPoll</Button>
                        </Link>
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
            
        )
    }
  }
  
  function mapStateToProps ({ questions, users }, { id }) {
    const question = questions[id]
    const authorInfo = question? users[question.author] : null
    const name = authorInfo? authorInfo.name : null
    const avatarURL = authorInfo? authorInfo.avatarURL : null
    const optionOne = question? question.optionOne : null
    const text = optionOne? optionOne.text : null
    return {
        question,
        name,
        avatarURL,
        id,
        text,
    }
  }
  export default connect(mapStateToProps)(QuestionPage);