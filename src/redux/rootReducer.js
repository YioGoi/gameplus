/*
  Author: Yiğit Doğan 10.04.2021
  ---------------
  Assumes: main Reducer for the App
  ---------------
  Returns: rootReducer with combineReducers combining all reducers.
*/

import { combineReducers } from 'redux'
import sortReducer from './sort/sortReducer'
import dataReducer from './data/dataReducer'
import filterReducer from './filter/filterReducer'


const rootReducer = combineReducers(
  {
    data: dataReducer,
    filter: filterReducer,
    sort: sortReducer,
  }
)

export default rootReducer