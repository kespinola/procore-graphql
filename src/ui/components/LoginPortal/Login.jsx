import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import ReduxFormErrors from '../ReduxFormErrors.jsx'

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) errors.email = 'Email required'
  if (!password) errors.password = 'Password required'

  return errors
}

const onSubmit = (values) => {
  console.log(values)
}

@reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate,
})
export default class Login extends React.Component {

  static propTypes = {
    fields: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
    }),
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool,
  };

  static defaultProps = {
  };

  render() {
    const {
      fields,
      fields: { email, password },
      handleSubmit,
      valid,
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReduxFormErrors {...{ fields }} />
        <input type="text" placeholder="Email Address" {...email} />
        <input type="password" placeholder="Password" {...password} />
        <input type="submit" value="Login" disabled={!valid} />
      </form>
    )
  }

}
