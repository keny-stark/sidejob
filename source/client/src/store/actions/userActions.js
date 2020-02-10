import axios from '../../axios-api';
import Cookies from 'js-cookie';
import {push} from 'connected-react-router';


export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';


export const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
export const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});


export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';



export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error  => ({type: LOGIN_USER_FAILURE, error});

export const LOGOUT_USER = 'LOGOUT_USER';
// export const logoutUserSuccess = () => ({type: LOGOUT_USER});


export const registerUser = userData => {
    return dispatch => {
        return axios.post('/accounts/register/', userData)
        .then(response => {
            console.log(response, 'response')
            dispatch(registerUserSuccess(response.data));  
            dispatch(push('/')); 
        })
    }
}


export const loginUser = userData => {
    return dispatch => {
        return axios.post('/accounts/login/', userData)
        .then(result => {
            dispatch(loginUserSuccess(userData));
            dispatch(push('/'));
        })
    }
}


export const logoutUser = (user) => {
    console.log(user, 'user');
    
    return dispatch => {
        axios({url: '/accounts/logout/', method: "post", data:{user}, withCredentials: true, headers: {"X-CSRFToken": Cookies.get('csrftoken')}})
        .then(response => {
            dispatch({type: LOGOUT_USER})
            dispatch(push('/'))
        })
    }
}