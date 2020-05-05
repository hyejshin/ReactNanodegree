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

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>(
    fakeAuth.isAuthenticated === true
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
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className="App">
          <NavBar/>
            <div>
              <Route path='/login' exact component={Login} />
              <PrivateRoute path='/' exact component={Dashboard} />
              <PrivateRoute path='/newQuestion' exact component={NewQuestion} />
              <PrivateRoute path='/leaderBoard' exact component={LeaderBoard} />
            </div>
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
