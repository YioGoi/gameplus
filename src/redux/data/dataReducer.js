import {
  STORE_MAIN_DATA
} from "./dataActionTypes"

const initialState = {
  mainData: null
}

// News Reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case STORE_MAIN_DATA:
      return {
        ...state,
        mainData: action.payload
      }

    default:
      return state
  }
}

export default dataReducer