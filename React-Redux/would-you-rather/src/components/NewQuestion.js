import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    render() {
        return (
            <div>NewQuestion</div>
        )
    }
  }
  
  export default connect()(NewQuestion);
  