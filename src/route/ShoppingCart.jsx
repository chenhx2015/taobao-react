import React from 'react'
import {connect} from 'react-redux'
import '../styles/shoppingcart.css'

const Item = ({imgurl, price, intro, leave, tip, qty, colors=[], sizes=[]}) => (
    <div className="shoppingcart">
        <div className="intro">
            <div className="imgbox">
                <img src={imgurl} alt=""/>
            </div>
            <div className="introtext">
                <p className="intro">{intro}</p>
                <p className="price">{price}</p>
            </div>
            <div className="num">
                <div className="choosenum">
                    <span className="decrease">-</span>
                    <span>{qty}</span>
                    <span className="increase">+</span>
                </div>
            </div>
        </div>
        
    </div>
)

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(
    ({cart=[], colors=[], sizes=[]}) => (
    <div className="chooseshade">
        <div className="choosepop">
        {console.log(cart)}
            {/* <span className="close">x</span> */}
            {cart.map(item=>( 
                <Item key={item.id} {...item} colors={colors} sizes={sizes} />
            ))}
        </div>
    </div>
))


