import {
  TOOGLE_SORT_STATE
} from "./sortActionTypes"

const initialState = {
  sortState: true
}

// News Reducer
const sortReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOOGLE_SORT_STATE:
      return {
        ...state,
        sortState: action.payload
      }

    default:
      return state
  }
}

export default sortReducer