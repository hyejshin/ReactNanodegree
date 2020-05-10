import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    render() {
        return (
            <div>NewQuestion</div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser: authedUser,
    }
}


export default connect(mapStateToProps)(NewQuestion);

  