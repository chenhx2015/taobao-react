export const ADD_GOODS = 'ADD_GOODS'
export const ADD_HOTS = 'ADD_HOTS'
export const ADD_CART = 'ADD_CART'
export const CART_DECREASE = 'CART_DECREASE'
export const CART_INCREASE = 'CART_INCREASE'
export const ORDER_ADD = 'ORDER_ADD'
export const ORDER_REMOVE = 'ORDER_REMOVE'
export const ADD_FASHIONS = 'ADD_FASHIONS'
export const ADD_CHEAPS = 'ADD_CHEAPS'
export const ADD_GLOBALS = 'ADD_GLOBALS'
export const ADD_WEITAO_DATA = 'ADD_WEITAO_DATA'
export const SHOW_LOADING = 'SHOW_LOADING'

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

export const addfashions = (data) => {
    return {
        type: ADD_FASHIONS,
        payload: data
    }
}

export const addcheaps = (data) => {
    return {
        type: ADD_CHEAPS,
        payload: data
    }
}

export const addglobals = (data) => {
    return {
        type: ADD_GLOBALS,
        payload: data
    }
}

export const addcart = (goodsinfo) => {
    return {
        type: ADD_CART,
        payload: goodsinfo
    }
}

// cart
export const cartIncrease = (id) => {
    return {
        type: CART_INCREASE,
        payload: id
    }
}
export const cartDecrease = (id) => {
    return {
        type: CART_DECREASE,
        payload: id
    }
}
export const orderAdd = (data) => {
    return {
        type: ORDER_ADD,
        payload: data
    }
}
export const orderRemove = (data) => {
    return {
        type: ORDER_REMOVE,
        payload: data
    }
}

// weitao
export const addweitaodata = (weitaodata) => {
    return {
        type: ADD_WEITAO_DATA,
        payload: weitaodata
    }
}

// loading in every module
export const showLoading = (data) => {
    return {
        type: SHOW_LOADING,
        payload: data
    }
}

