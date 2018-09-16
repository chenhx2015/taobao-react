export const ADD_GOODS = 'ADD_GOODS'
export const ADD_CART = 'ADD_CART'

export const addgoods = (data) => {
    return {
        type: ADD_GOODS,
        payload: data

    }
}

export const addcart = (goodsinfo) => {
    return {
        type: ADD_CART,
        payload: goodsinfo
    }
}

