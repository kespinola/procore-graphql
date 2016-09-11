import './index.scss'

import React from 'react'
import { render } from 'react-dom'

import Scene from './scene/Scene.jsx'

// import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import { reducer as localReducer } from 'redux-react-local'
//
// import configureStore from './redux/utils/configureStore'
// import { reducer as appReducer } from './redux/modules/app'
// import { reducer as ircReducer } from './redux/modules/irc'
// import UserInterface from './ui/components/UI.jsx'
//
// const reducer = combineReducers({
//   form: formReducer,
//   local: localReducer,
//   app: appReducer,
//   irc: ircReducer,
// })
//
// const store = configureStore({}, reducer)
//
// render(
//   <UserInterface store={store} />,
//   document.getElementById('root')
// )

render(
  <Scene />,
  document.getElementById('root')
)
