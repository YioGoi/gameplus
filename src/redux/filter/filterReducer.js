import {
  SET_CHECKED_GENRES
} from "./filterActionTypes"

const initialState = {
  checkedGenresArray: []
}

// News Reducer
const filterReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CHECKED_GENRES:
      let cloneOfCheckedGenres = Object.assign([], state.checkedGenresArray)
      let newGenre = action.payload

      let index = cloneOfCheckedGenres.findIndex(check => check === newGenre.text)
      if (index === -1) {
        cloneOfCheckedGenres.push(newGenre.text)
      } else if (!newGenre.checked) {
        cloneOfCheckedGenres.splice(index, 1)
      }
      return {
        ...state,
        checkedGenresArray: [...cloneOfCheckedGenres]
      }

    default:
      return state
  }
}

export default filterReducer