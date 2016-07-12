import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import ReduxFormErrors from '../ReduxFormErrors.jsx'

const validate = ({ email }) => {
  const errors = {}

  if (!email) errors.email = 'Email required'

  return errors
}

const onSubmit = (values) => {
  console.log(values)
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
      valid,
    } = this.props

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReduxFormErrors {...{ fields }} />
        <input type="text" placeholder="Email Address" {...email} />
        <input type="submit" value="Login" disabled={!valid} />
      </form>
    )
  }

}
