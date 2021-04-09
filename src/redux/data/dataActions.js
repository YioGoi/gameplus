import {
    STORE_MAIN_DATA,
} from './dataActionTypes'

export const storeMainData = data => {
    return {
        type: STORE_MAIN_DATA,
        payload: data
    }
}
