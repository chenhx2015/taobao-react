import {ADD_GOODS, ADD_HOTS, ADD_FASHIONS, ADD_CHEAPS, ADD_GLOBALS} from '../action/actions'

function upinsert(state, data) {
    let ids = data.map(item=>item.id)
    state = state.filter(item=> ids.indexOf(item.id) === -1 )
    return state.concat(data)
}

export default (state=[], action) => {
    let data = null
    switch (action.type) {
        case ADD_GOODS: 
            data = action.payload.map(item=>({...item, tag:'recommend'}))
            return upinsert(state, data)
        case ADD_HOTS:
            data = action.payload.map(item=>({...item, tag:'hot'}))
            return upinsert(state, data)
        case ADD_FASHIONS:
            data = action.payload.map(item=> ({...item, tag:'fashion'}))
            return upinsert(state, data)
        case ADD_CHEAPS:
            data = action.payload.map(item=> ({...item, tag: 'cheap'}))
            return upinsert(state, data)
        case ADD_GLOBALS:
            data = action.payload.map(item=> ({...item, tag: 'global'}))
            return upinsert(state, data)
        default:
            return state
    }

}

