import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div>Dashboard</div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser,
    }
}


export default connect(mapStateToProps)(Dashboard);
  