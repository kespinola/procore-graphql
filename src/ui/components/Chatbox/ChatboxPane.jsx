import React from 'react'
import { get, map, toJs, vector } from 'mori'
import MoriPropTypes from 'react-mori-proptypes'

import ChatboxMessage from './ChatboxMessage.jsx'

export default class ChatboxPane extends React.Component {

  static propTypes = {
    messages: MoriPropTypes.vec,
  };

  static defaultProps = {
    messages: vector(),
  };

  render() {
    const { messages } = this.props

    return (
      <div>
        <ul>
          {toJs(map((message, i) => (
            <li key={i}>
              <ChatboxMessage {...{
                from: get(message, 'from'),
                text: get(message, 'text'),
              }} />
            </li>
          )), messages)}
        </ul>
      </div>
    )
  }

}
