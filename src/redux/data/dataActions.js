import {
    STORE_MAIN_DATA,
    SET_SEARCH_VALUE
} from './dataActionTypes'

export const storeMainData = data => {
    return {
        type: STORE_MAIN_DATA,
        payload: data
    }
}

export const setSearchValue = value => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}
