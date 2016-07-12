import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

export const constants = {
  INIT: 'APP:INIT',
}

export const actions = {
  init: createAction(constants.INIT),
}

export const reducer = handleActions({

  [constants.INIT]: (state, { payload }) => {
    console.log('init', payload)
    return state
  },

}, Map())
