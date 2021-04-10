import {
    SET_CHECKED_GENRES,
} from './filterActionTypes'

export const setCheckedGenres = data => {
    return {
        type: SET_CHECKED_GENRES,
        payload: data
    }
}
