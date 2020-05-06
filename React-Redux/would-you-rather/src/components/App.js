import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>(
    props.authedUser
    ? <Component {...props} />
    : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
  )}/>
)

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
            <div>
              <Route path='/login' exact component={Login} />
              <PrivateRoute path='/' exact component={Dashboard} authedUser={authedUser} />
              <PrivateRoute path='/newQuestion' exact component={NewQuestion} authedUser={authedUser}/>
              <PrivateRoute path='/leaderBoard' exact component={LeaderBoard} authedUser={authedUser} />
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    loading: users === null
  }
}

export default connect(mapStateToProps)(App);
