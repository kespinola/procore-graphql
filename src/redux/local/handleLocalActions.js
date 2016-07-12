export default(reducers) => {
  const reducer = (state, action) => {
    if (!action.me) {
      return state
    }

    const { meta: { type }, payload } = action

    if (!reducers[type]) {
      return state
    }

    return reducers[type](state, { type, payload })
  }

  return reducer
}
