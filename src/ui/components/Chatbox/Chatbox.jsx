import React, { PropTypes } from 'react'
import { get, hashMap, map, toClj, toJs, vector } from 'mori'
import MoriPropTypes from 'react-mori-proptypes'

import { local } from '../../../redux/local'

import reducer from './reducer'
import ChatboxTab from './ChatboxTab.jsx'
import ChatboxPane from './ChatboxPane.jsx'
import ChatboxInput from './ChatboxInput.jsx'

@local({
  reducer,
  ident: 'chatbox',
  initial: (props) => {
    return toClj({
      index: 0,
      inputValue: '',
    })
  },
})
export default class Chatbox extends React.Component {

  static propTypes = {
    actions: PropTypes.shape({
      setTabIndex: PropTypes.func,
      setInputValue: PropTypes.func,
    }),
    channels: MoriPropTypes.vec,
    state: MoriPropTypes.map,
  }

  static defaultProps = {
    actions: {
      setTabIndex: () => {},
      setInputValue: () => {},
    },
    channels: toClj([{ label: 'World' }]),
    state: hashMap(),
  }

  onClickTab = (index) => {
    this.props.actions.setTabIndex({ index })
  }

  onInputChange = (value) => {
    this.props.actions.setInputValue({ value })
  }

  onInputEnter = (value) => {
    this.props.actions.setInputValue({ value: '' })
  }

  render() {
    const { channels, state } = this.props

    return (
      <div>
        <ul>
          {toJs(map((channel, i) => (
            <ChatboxTab {...{
              key: i,
              index: i,
              label: get(channel, 'label'),
              onClick: this.onClickTab,
            }} />
        ), channels))}
        </ul>
        <ChatboxPane {...{
          messages: vector(),
        }} />
        <ChatboxInput {...{
          onChange: this.onInputChange,
          onEnter: this.onInputEnter,
          value: get(state, 'inputValue'),
        }} />
      </div>
    )
  }
}
