import { assoc } from 'mori'

const SET_TAB_INDEX = 'SET_TAB_INDEX'
const SET_INPUT_VALUE = 'SET_INPUT_VALUE'

export default {

  [SET_TAB_INDEX]: (state, { payload }) => assoc(state, 'index', payload.index),

  [SET_INPUT_VALUE]: (state, { payload }) => assoc(state, 'inputValue', payload.value),

}
