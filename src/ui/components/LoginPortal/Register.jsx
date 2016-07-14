import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import ReduxFormErrors from '../ReduxFormErrors.jsx'

const validate = ({ username, email, password, password2 }) => {
  const errors = {}

  if (!username) errors.username = 'Username required'
  if (!email) errors.email = 'Email required'
  if (!password) errors.password = 'Password required'
  if (!password2) errors.password2 = 'Password confirmation required'
  if (password !== password2) errors._error = 'Password fields must match'

  return errors
}

const onSubmit = (values) => {
  console.log(values)
}

@reduxForm({
  form: 'register',
  fields: ['username', 'email', 'password', 'password2'],
  validate,
})
export default class Register extends React.Component {

  static propTypes = {
    error: PropTypes.any,
    fields: PropTypes.shape({
      username: PropTypes.object,
      email: PropTypes.object,
      password: PropTypes.object,
      password2: PropTypes.object,
    }),
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool,
  };

  static defaultProps = {
  };

  render() {
    const {
      error,
      fields,
      fields: { username, email, password, password2 },
      handleSubmit,
      onClickLogin,
      valid,
    } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReduxFormErrors {...{ error, fields }} />
          <input type="text" placeholder="Username" {...username} />
          <input type="text" placeholder="Email Address" {...email} />
          <input type="password" placeholder="Password" {...password} />
          <input type="password" placeholder="Password Confirmation" {...password2} />
          <input type="submit" value="Register" disabled={!valid} />
        </form>
        <a onClick={onClickLogin}>Back to Login</a>
      </div>
    )
  }

}
