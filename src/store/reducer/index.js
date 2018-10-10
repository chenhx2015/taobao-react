import { combineReducers } from 'redux'
import goods from './goods'
import cart from './cart'
import weitao from './weitao'
import order from './order'

export default combineReducers({
    goods,
    cart,
    weitao,
    order
})