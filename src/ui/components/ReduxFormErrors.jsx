import React, { PropTypes } from 'react'

const ReduxFormErrors = ({ error = false, fields = [] }) => (
  <ul>
    {error && <li>{error}</li>}
    {Object.keys(fields).map(key => {
      if (fields[key].error) {
        return <li>{fields[key].error}</li>
      }

      return ''
    })}
  </ul>
)

ReduxFormErrors.propTypes = {
  error: PropTypes.any,
  fields: PropTypes.array,
}

export default ReduxFormErrors
