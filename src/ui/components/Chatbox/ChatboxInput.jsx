import React, { PropTypes } from 'react'

export default class ChatboxInput extends React.Component {

  static propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    value: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    onEnter: () => {},
    value: '',
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onEnter(e.target.value)
    }
  }

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    const { props: { value }, onChange, onKeyPress } = this

    return (
      <input {...{ type: 'text', onChange, onKeyPress, value }} />
    )
  }

}
