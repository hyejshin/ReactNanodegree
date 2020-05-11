import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class Question extends Component {
    state = {
        selectedOption: ""
    }
    handleOptionChange = (option) => {
        this.setState(() => ({
            selectedOption: option
        }))
    }
    render() {
        const { authorInfo } = this.props;
        const { author, id, optionOne, optionTwo } = this.props.question;
        const { selectedOption } = this.state;
        
        return (
            
            <Card border="info" className="questionCard" id={id}>
                <Card.Header><b>{authorInfo.name}</b> asks</Card.Header>
                
                <Card.Body>
                <img className="avatar" src={authorInfo.avatarURL} />
                <div className="question">
                    <Card.Title>Would You Rather...</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item key="option1"
                                            variant={selectedOption === "option1"? "info" : ""}
                                            onClick={() => this.handleOptionChange("option1")}>
                                {optionOne.text}
                            </ListGroup.Item>
                            <ListGroup.Item key="option2"
                                            variant={selectedOption === "option2"? "info" : ""}
                                            onClick={() => this.handleOptionChange("option2")}>
                                {optionTwo.text}
                            </ListGroup.Item>
                        </ListGroup>
                        <Button className="submit" variant="info">Submit</Button>
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
            
        )
    }
  }
  
  function mapStateToProps ({ questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    return {
        question,
        authorInfo: users[question.author],
    }
  }

  export default connect(mapStateToProps)(Question);
  