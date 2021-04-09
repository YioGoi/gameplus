import {
    TOOGLE_SORT_STATE,
} from './sortActionTypes'

export const toogleSortState = data => {
    return {
        type: TOOGLE_SORT_STATE,
        payload: data
    }
}
