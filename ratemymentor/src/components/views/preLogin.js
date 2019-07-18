import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../login/Register'
import NavBar from '../login/NavBar'
import MarketingPage from '../general/MarketingPage'

// All views pre-login

export class preLogin extends Component {
  constructor() {
    super();
}

  render() {
    return (
      <div>
        <NavBar/>
            <Route exact path="/" component={MarketingPage} />
      </div>
    )
  }
}

export default preLogin