import React from 'react';

export default class ChatboxMessage extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    const { from = '', text = '' } = this.props;

    return (
      <div>{from}: {text}</div>
    );
  }

}
