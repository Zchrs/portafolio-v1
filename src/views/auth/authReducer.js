
import { types } from "../../types/types";


export const autReducer = (state = {}, action) =>{

    
    
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
            case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}
// const initialState = {
//     id: '1234',
//     name: "Zchack",
// }
export const authReducers = (state = {}, action) =>{

    switch ( action.type ) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.name
            }
            case types.logout:
            return {}
        default:
            return state;
    }
}