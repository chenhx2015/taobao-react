import {ADD_GOODS, ADD_HOTS} from '../action/actions'

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
        default:
            return state
    }

}

