import React from 'react';

export default class ChatboxTab extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  onClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    const { name } = this.props;

    return (
      <li onClick={this.onClick}>{name}</li>
    );
  }

}
