import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <div className="App">
          <NavBar/>
            <Switch>
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={authedUser === null? Login : Dashboard}/>
              <Route path='/questions/:id' exact component={authedUser === null? Login : Question} />
              <Route path='/add' exact component={authedUser === null? Login : NewQuestion} />
              <Route path='/leaderboard' exact component={authedUser === null? Login : LeaderBoard} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions, loadingBar }) {
  return {
    authedUser,
    users,
    questions,
    loadingBar,
    loading: loadingBar.default === 1,
    isLogined: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
