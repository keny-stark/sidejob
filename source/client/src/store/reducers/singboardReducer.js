import { FETCH_SINGBOARDS_SUCCESS } from "../actions/singboardActions"

const initialState = {
    singboards: []
}

const singboardsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SINGBOARDS_SUCCESS:
            return {...state, singboards: action.singboards}
        default:
            return state    
    }
}


export default singboardsReducer