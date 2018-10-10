import { ADD_CART, CART_DECREASE, CART_INCREASE, CART_CHOOSE } from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_CART:
            {
                let {id, qty, price, intro, imgurl, checkstate, count = 0, total = 0} = action.payload
                let goods = state.find(val=>val.id===id)
                if(goods){
                    Object.assign(goods, {
                        qty:goods.qty+qty,
                        price,
                        intro,
                        imgurl,
                        checkstate,
                        count,
                        total
                    })
                    return [].concat(...state)
                }else{
                    return state.concat({id, qty, price, intro, imgurl, checkstate, count, total })
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
        case CART_CHOOSE:
            {
                let id = action.payload
                let goods = state.find(val=>val.id === id)
                // 改变圆圈的状态，同时计算件数和总价
                Object.assign(goods, {
                    checkstate: !goods.checkstate,
                    count: goods.checkstate === true ? goods.count + 1 : goods.count
                })
                return [].concat(...state)
            }
        default:
            return state
    }

}


