import { types } from '../types/types';

const initialState = {
    checking: true,
    // uid: null,
    // name: null
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
           
        case types.authCheckingFInish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false,
                state: null
            }


        default:
            return state;
    }

}

export const authReducerActions = ( state = {}, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        case types.logout:
            return {}
    
        default:
            return state;
    }
}
