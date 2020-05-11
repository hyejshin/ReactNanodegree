import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        option1: '',
        option2: '',
        toHome: false
    }
    onChangeHandlerOption1 = (event) => {
        const option1 = event.target.value
        this.setState(() => ({
            option1
        }))
    }
    onChangeHandlerOption2 = (event) => {
        const option2 = event.target.value
        this.setState(() => ({
            option2
        }))
    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        const { option1, option2 } = this.state
        const { dispatch } = this.props
        dispatch(handleAddQuestion(option1, option2))

        this.setState(() => ({
            option1: '',
            option2: '',
            toHome: true,
        }))
    }
    render() {
        if (this.state.toHome) {
            return <Redirect to='/' />
        }

        return (
            <Card border="info" className="questionCard">
                <Card.Header><h2>Create New Question</h2></Card.Header>
                <Card.Body>
                <div className="question">
                    <h6>Complete the question:</h6>
                    <Card.Title>Would You Rather...</Card.Title>
                    <Card.Text>
                        <Form.Control type="text" onChange={this.onChangeHandlerOption1}
                                      placeholder="Enter Option One Text Here" />
                        - OR -
                        <Form.Control type="text" onChange={this.onChangeHandlerOption2}
                                      placeholder="Enter Option Two Text Here" />
                        <Button className="submit" variant="info" onClick={this.onSubmitHandler}>
                            Submit
                        </Button>
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
            
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser,
    }
}


export default connect(mapStateToProps)(NewQuestion);

  