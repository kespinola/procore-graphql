import React, { PropTypes } from 'react'
import { get, toClj } from 'mori'

import { local } from '../../../redux/local'

import reducer from './reducer'
import ForgotPassword from './ForgotPassword.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

const FORGOT_PASSWORD = 0
const LOGIN_VIEW = 1
const REGISTER_VIEW = 2

@local({
  reducer,
  ident: 'loginPortal',
  initial: (props) => {
    return toClj({
      view: LOGIN_VIEW,
    })
  },
})
export default class LoginPortal extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    const { state } = this.props
    const view = get(state, 'view')

    console.log(view);

    return (
      <div>
        {view === LOGIN_VIEW && <Login />}
        {view === REGISTER_VIEW && <Register />}
        {view === FORGOT_PASSWORD && <ForgotPassword />}
      </div>
    )
  }

}
