import { types } from "../types/types"

const initialState = {
    isLoggedIn: false
}

export const authReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name,
                isLoggedIn: true
            }

        case types.logout:
            return {
                isLoggedIn: false
            }

        default:
            return state;

    }
    
}
