import axios from '../../axios-api'
export const FETCH_SINGBOARDS_SUCCESS = 'FETCH_SINGBOARDS_SUCCESS';



export const fetchSingboardsSuccess = singboards => ({type: FETCH_SINGBOARDS_SUCCESS,singboards});


export const fetchSingboard = () => {
    return dispatch => {
       axios.get('/signboard/').then(result => {
           dispatch(fetchSingboardsSuccess(result.data))
       }) 
    }
}