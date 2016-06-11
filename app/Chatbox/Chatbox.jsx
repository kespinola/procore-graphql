import React from 'react';

import ChatboxTab from './ChatboxTab.jsx';
import ChatboxPane from './ChatboxPane.jsx';
import ChatboxInput from './ChatboxInput.jsx';

export default class Chatbox extends React.Component {

  onClickTab = (index) => {
    console.log(index);
  }

  onInputText = (text) => {
    console.log(text);
  }

  render() {
    const { channels = [] } = this.props;

    return (
      <div>
        <ul>
          {channels.map((channel, i) => (
            <ChatboxTab key={i} index={i} name={channel.name} onClick={this.onClickTab} />
          ))}
        </ul>
        <ChatboxPane messages={[{ from: 'user1', to: 'user2', text: 'test' }]} />
        <ChatboxInput onEnter={this.onInputText} />
      </div>
    );
  }
}
