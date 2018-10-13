import {SHOW_LOADING} from '../action/actions'

export default (state=false, action) => {
    switch (action.type) {
        case SHOW_LOADING: 
            return action.payload
        default:
            return state
    }
}