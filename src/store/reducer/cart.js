import { ADD_CART, CART_DECREASE, CART_INCREASE } from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_CART:
            {
                let {id, qty, price, intro, imgurl} = action.payload
                let goods = state.find(val=>val.id===id) 
                if(goods){
                    Object.assign(goods, {qty:goods.qty+qty, price, intro, imgurl })
                    return [].concat(...state)
                }else{
                    return state.concat({id, qty, price, intro, imgurl })
                }
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


