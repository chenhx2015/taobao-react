import { combineReducers } from 'redux'
import goods from './goods'
import cart from './cart'
import weitao from './weitao'
import order from './order'
import loading from './loading'
import allorder from './allorder' // 总的订单列表

export default combineReducers({
    goods,
    cart,
    weitao,
    order,
    loading,
    allorder
})