import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Chat from './components/Chat'
// import RequireAuth from './containers/AuthenticationContainer'

export const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/chat" />
      <Route render={props => (
        <App {...props}>
          <div>
            <Route path="/home" component={Home} />
            <Route path="/chat" component={Chat} />
          </div>
        </App>
      )} />
    </Switch>
  </Router>
)

export default Routes
