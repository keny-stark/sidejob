import { REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/userActions';

const initialState = {
    user: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_SUCCESS:
            return {...state, user: action.user}
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user}
        case LOGOUT_USER:
            return {...state, user: null}    
        default:
            return state
    }

}

export default userReducer;