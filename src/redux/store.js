/*
  Author: Yiğit Doğan 9-04-2021
  ---------------
  Assumes: main Store for App
  ---------------
  Returns: the main Store with rootReducer
*/

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

export default store