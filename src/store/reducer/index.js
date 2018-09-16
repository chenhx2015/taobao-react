import { combineReducers } from 'redux'
import goods from './goods'
import cart from './cart'

export default combineReducers({
    goods,
    cart
})