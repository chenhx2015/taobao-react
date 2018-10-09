export const ADD_GOODS = 'ADD_GOODS'
export const ADD_HOTS = 'ADD_HOTS'
export const ADD_CART = 'ADD_CART'
export const ADD_WEITAO_DATA = 'ADD_WEITAO_DATA'


export const addgoods = (data) => {
    return {
        type: ADD_GOODS,
        payload: data
    }
}

export const addhots = (data) => {
    return {
        type: ADD_HOTS,
        payload: data
    }
}

export const addcart = (goodsinfo) => {
    return {
        type: ADD_CART,
        payload: goodsinfo
    }
}
// weitao
export const addweitaodata = (weitaodata) => {
    return {
        type: ADD_WEITAO_DATA,
        payload: weitaodata
    }
}

