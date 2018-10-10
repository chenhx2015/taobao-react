import { ORDER_ADD, ORDER_REMOVE } from '../action/actions'

function upinsert(state, data) {
    let ids =[]
    if(Array.isArray(data)){
        ids = data.map(item=>item.id)
    }else{
        ids=[data]
    }
    state = state.filter(item=> ids.indexOf(item.id) === -1 )
    return state.concat(data)
}

export default (state=[], action) => {
    switch (action.type) {
        case ORDER_ADD:
            return upinsert(state, action.payload)
        case ORDER_REMOVE:
            if(Array.isArray(action.payload)){
                return state.filter(item=>action.payload.indexOf(item.id)===-1)
            }else{
                return state.filter(item=>item.id !== action.payload)
            }
        default:
            return state
    }

}


