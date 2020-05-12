import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Button, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import authedUser from '../reducers/authedUser'

class Question extends Component {
    state = {
        selectedOption: "",
        showQuestion: this.props.yourVote? false : true
    }
    handleOptionChange = (option) => {
        this.setState(() => ({
            selectedOption: option
        }))
    }
    submitHandler = () => {
        this.setState(() => ({
            showQuestion: false
        }))
    }
    render() {
        const { id, name, avatarURL, optionOneText, optionTwoText, 
                optionOneCount, optionTwoCount, yourVote } = this.props;
        const { showQuestion, selectedOption } = this.state;
        const optionOnePercentage = Math.round(optionOneCount / (optionOneCount + optionTwoCount) * 100);
        const optionTwoPercentage = Math.round(optionTwoCount / (optionOneCount + optionTwoCount) * 100);
        
        if(showQuestion) {
            return (
                <Card border="info" className="questionCard" id={id}>
                    <Card.Header><b>{name}</b> asks</Card.Header>
                    
                    <Card.Body>
                    <img className="avatar" src={avatarURL} />
                    <div className="question">
                        <Card.Title>Would You Rather...</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item key="option1"
                                                variant={selectedOption === "option1"? "info" : ""}
                                                onClick={() => this.handleOptionChange("option1")}>
                                    {optionOneText}
                                </ListGroup.Item>
                                <ListGroup.Item key="option2"
                                                variant={selectedOption === "option2"? "info" : ""}
                                                onClick={() => this.handleOptionChange("option2")}>
                                    {optionTwoText}
                                </ListGroup.Item>
                            </ListGroup>
                            <Button className="submit" variant="info" onClick={this.submitHandler}>Submit</Button>
                        </Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            )
        } else {
            return (
                <Card border="info" className="questionCard" id={id}>
                    <Card.Header><h6>Asked by {name}</h6></Card.Header>
                    
                    <Card.Body>
                    <img className="avatar" src={avatarURL} />
                    <div className="question">
                        <Card.Title><h4>Results:</h4></Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item key="option1"
                                                variant={yourVote === "option1"? "info" : ""}>
                                    {optionOneText}
                                    <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                    {optionOneCount} out of {optionOneCount + optionTwoCount} votes
                                </ListGroup.Item>
                                <ListGroup.Item key="option2"
                                                variant={yourVote === "option2"? "info" : ""}>
                                    {optionTwoText}
                                    <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                    {optionTwoCount} out of {optionOneCount + optionTwoCount} votes
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            )
        }
    }
  }
  
  function mapStateToProps ({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    const authorInfo = question? users[question.author] : null
    const name = authorInfo? authorInfo.name : null
    const avatarURL = authorInfo? authorInfo.avatarURL : null
    const optionOneText = question? question.optionOne.text : null
    const optionTwoText = question? question.optionTwo.text : null
    const optionOneCount = question? question.optionOne.votes.length : 0
    const optionTwoCount = question? question.optionTwo.votes.length : 0
    let yourVote = null
    if (question && question.optionOne.votes.includes(authedUser)) {
        yourVote = "option1"
    } else if (question && question.optionTwo.votes.includes(authedUser)) {
        yourVote = "option2"
    }
    return {
        id,
        name,
        avatarURL,
        optionOneText,
        optionTwoText,
        optionOneCount,
        optionTwoCount,
        yourVote,
    }
  }

  export default connect(mapStateToProps)(Question);
  