import {
  STORE_MAIN_DATA,
  SET_SEARCH_VALUE
} from "./dataActionTypes"

const initialState = {
  mainData: null,
  searchValue: ''
}

// News Reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case STORE_MAIN_DATA:
      return {
        ...state,
        mainData: action.payload
      }

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }

    default:
      return state
  }
}

export default dataReducer