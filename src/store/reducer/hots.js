import {ADD_HOTS} from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_HOTS:
            return [].concat(...action.payload)
            break;
        default:
            return state
    }

}