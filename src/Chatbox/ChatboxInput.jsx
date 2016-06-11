import React from 'react';

export default class ChatboxInput extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onEnter(e.target.value);
    }
  }

  render() {
    // const { } = this.props;

    return (
      <input type="text" onKeyPress={this.onKeyPress} />
    );
  }

}
