import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import ReduxFormErrors from '../ReduxFormErrors.jsx'

const validate = ({ username, email, password, passwordConfirm }) => {
  const errors = {}

  if (!username) errors.username = 'Username required'
  if (!email) errors.email = 'Email required'
  if (!password) errors.password = 'Password required'
  if (!passwordConfirm) errors.passwordConfirm = 'Password confirmation required'
  if (password !== passwordConfirm) errors._error = 'Password fields must match'

  return errors
}

const onSubmit = async (values) => {
  try {
    const response = await fetch('http://localhost:8080/register', {
      method: 'post',
      body: JSON.stringify(values),
    })

    if (response.status !== 200) {

    }
  } catch (e) {
    console.error('register error', e)
  }
}

@reduxForm({
  form: 'register',
  fields: ['username', 'email', 'password', 'passwordConfirm'],
  validate,
})
export default class Register extends React.Component {

  static propTypes = {
    error: PropTypes.any,
    fields: PropTypes.shape({
      username: PropTypes.object,
      email: PropTypes.object,
      password: PropTypes.object,
      passwordConfirm: PropTypes.object,
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
      fields: { username, email, password, passwordConfirm },
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
          <input type="password" placeholder="Password Confirmation" {...passwordConfirm} />
          <input type="submit" value="Register" disabled={!valid} />
        </form>
        <a onClick={onClickLogin}>Back to Login</a>
      </div>
    )
  }

}
