import { ADD_CART } from '../action/actions'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_CART:
            let {id, qty, price, intro, imgurl} = action.payload
            let goods = state.find(val=>val.id===id) 
            if(goods){
                Object.assign(goods, {id, qty, price, intro, imgurl })
                return [].concat(...state)
            }else{
                return state.concat({id, qty, price, intro, imgurl })
            }
    
        default:
            return state
    }

}


