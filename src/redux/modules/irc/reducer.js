import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const constants = {
  CONNECT: 'irc/CONNECT',
  CONNECT_SUCCESS: 'irc/CONNECT_SUCCESS',
  CONNECT_FAIL: 'irc/CONNECT_FAIL',
  RECEIVE: 'irc/RECEIVE',
  SEND: 'irc/SEND',
}

export const actions = {
  connect: createAction(constants.CONNECT),
  receive: createAction(constants.RECEIVE),
  send: createAction(constants.SEND),
}

export const reducer = handleActions({

  [constants.CONNECT]: (state, { payload }) => {
    console.log('connect', payload)
    return state
  },

}, Map())
