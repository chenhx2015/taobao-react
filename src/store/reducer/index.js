import { combineReducers } from 'redux'
import goods from './goods'
import hots from './hots'
import cart from './cart'
import weitao from './weitao'

export default combineReducers({
    goods,
    hots,
    cart,
    weitao
})