import {ADD_GOODS, ADD_HOTS} from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_GOODS: 
            console.warn('add goods', state.length)
            return [].concat(...(action.payload.map(item=>({...item, tag:'recommend'}))))
        case ADD_HOTS:
            console.warn('add hots', state.length)
            return state.concat(...(action.payload.map(item=>({...item, tag:'hot'}))))
        default:
            return state
    }

}

