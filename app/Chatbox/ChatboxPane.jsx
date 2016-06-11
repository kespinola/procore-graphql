import React from 'react';

import ChatboxMessage from './ChatboxMessage.jsx';

export default class ChatboxPane extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    const { messages = [] } = this.props;

    return (
      <div>
        <ul>
          {messages.map((message, i) => (
            <li key={i}>
              <ChatboxMessage from={message.from} text={message.text} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

}
