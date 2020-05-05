import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className="App">
          <NavBar/>
            {authedUser === null || authedUser === undefined
            ? <Login/>
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/login' exact component={Login} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    loading: users === null
  }
}

export default connect(mapStateToProps)(App);
