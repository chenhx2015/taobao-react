import { MAKE_ALL_ORDER } from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case MAKE_ALL_ORDER:
            let {id, qty} = action.payload
            let goods = state.find(val=>val.id === id)
            if(goods) {
                Object.assign(goods, {qty:goods.qty + qty})
                return [].concat(...state)
            }else{
                return state.concat(action.payload)
            }
        default:
            return state
    }
}