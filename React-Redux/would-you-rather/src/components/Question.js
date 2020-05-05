import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return (
            <div>Question</div>
        )
    }
  }
  
  export default connect()(Question);
  