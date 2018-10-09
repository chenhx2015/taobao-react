import React from 'react'

const Item = ({id, imgurl, price, intro, leave, tip, qty, colors=[], sizes=[], increase, decrease}) => (
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
                    <span className="decrease" onClick={()=>decrease(id)}>-</span>
                    <span>{qty}</span>
                    <span className="increase" onClick={()=>increase(id)}>+</span>
                </div>
            </div>
        </div>
        
    </div>
)


export default  ({cart=[], colors=[], sizes=[], increase, decrease}) => (
    <div className="chooseshade">
        <div className="choosepop">
       
            {/* <span className="close">x</span> */}
            {cart.map(item=>( 
                <Item key={item.id} {...item} colors={colors} sizes={sizes} increase={increase} decrease={decrease} />
            ))}
        </div>
    </div>
)