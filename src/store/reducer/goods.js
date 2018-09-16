import {ADD_GOODS} from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_GOODS: 
            return [].concat(...action.payload)
            break;
        default:
            return state
    }

}

