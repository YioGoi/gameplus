/*
  Author: Musa Arda 10-11-2019
  ---------------
  Assumes: main (and only) Reducer for Deskop App
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