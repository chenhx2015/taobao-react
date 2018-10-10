import React from 'react'
import {connect} from 'react-redux'
import '../styles/shoppingcart.css'
import Cart from '../components/cart/list'

import { cartIncrease, cartDecrease, orderAdd, orderRemove } from '../store/action/actions'


const mapStateToProps = (state) =>{
    
return ({
    cart: state.cart,
    checkstates: state.order.map(item=>item.id),
    count: state.order.length,
    total: state.order.reduce((sum, item)=> sum + parseInt(item.qty) * parseInt(item.price), 0)
})
}

const mapDispatchToProps = (dispatch, state) => ({
    increase: (id) => { dispatch(cartIncrease(id)) },
    decrease: (id) => { dispatch(cartDecrease(id)) },
    choose:   (data) => { dispatch(orderAdd(data))},
    unchoose: (data) => { dispatch(orderRemove(data))} 
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


