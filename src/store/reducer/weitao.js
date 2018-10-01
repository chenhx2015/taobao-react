import {ADD_WEITAO_DATA} from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_WEITAO_DATA: 
            return [].concat(...action.payload)
            break;
        default:
            return state
    }

}