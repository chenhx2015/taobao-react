import { ORDER_ADD, ORDER_REMOVE, CART_DECREASE, CART_INCREASE } from '../action/actions'

function upinsert(state, data) {
    let ids = null
    if(Array.isArray(data)){
        ids = data.map(item=>item.id)
    }else{
        ids = [data]
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
        case CART_DECREASE:
            {
                let id = action.payload
                let goods = state.find(val=>val.id === id)
                if(goods) {
                    Object.assign(goods, {qty:goods.qty>0?goods.qty-1:0})
                    return [].concat(...state)
                }else{
                    return state
                }
            }
        case CART_INCREASE:
            {
                let id = action.payload
                let goods = state.find(val=>val.id === id)
                if(goods) {
                    Object.assign(goods, {qty:goods.qty+1})
                    return [].concat(...state)
                }else{
                    return state
                }
            }
        default:
            return state
    }

}


