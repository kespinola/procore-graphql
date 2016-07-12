import React, { PropTypes } from 'react'

export default class ChatboxTab extends React.Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  onClick = () => {
    this.props.onClick(this.props.index)
  }

  render() {
    const { label } = this.props

    return (
      <li onClick={this.onClick}>{label}</li>
    )
  }

}
