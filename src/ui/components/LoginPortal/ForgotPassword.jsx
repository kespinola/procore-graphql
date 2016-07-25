import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import ReduxFormErrors from '../ReduxFormErrors.jsx'

const validate = ({ email }) => {
  const errors = {}

  if (!email) errors.email = 'Email required'

  return errors
}

const onSubmit = async (values) => {
  try {
    const response = await fetch('http://localhost:8080/reset-pw', {
      method: 'post',
      body: JSON.stringify(values),
    })

    if (response.status !== 200) {

    }
  } catch (e) {
    console.error('reset password error', e)
  }
}

@reduxForm({
  form: 'login',
  fields: ['email'],
  validate,
})
export default class Login extends React.Component {

  static propTypes = {
    fields: PropTypes.shape({
      email: PropTypes.object,
    }),
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool,
  };

  static defaultProps = {
  };

  render() {
    const {
      fields,
      fields: { email },
      handleSubmit,
      onClickLogin,
      valid,
    } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReduxFormErrors {...{ fields }} />
          <input type="text" placeholder="Email Address" {...email} />
          <input type="submit" value="Reset Password" disabled={!valid} />
        </form>
        <a onClick={onClickLogin}>Back to Login</a>
      </div>
    )
  }

}
