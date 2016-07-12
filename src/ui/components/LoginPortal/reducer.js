import { assoc } from 'mori'

const SET_VIEW = 'SET_VIEW'

export default {

  [SET_VIEW]: (state, { payload }) => assoc(state, 'view', payload.view),

}
