import {POST_USER, FETCH_FRIENDS, ADD_FRIEND} from '../actions/friendActions'



const initialState = {
    data: [],
    users: []
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_USER: 
            return {
                ...state,
                users: [...state.users, action.payload] 
            }
        case FETCH_FRIENDS:
            return {
                ...state,
                data: action.payload
            }
        case ADD_FRIEND: 
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state
    }
}