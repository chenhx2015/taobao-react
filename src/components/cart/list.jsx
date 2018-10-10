import React from 'react'

const Item = ({id, imgurl, price, intro, leave, tip, qty, colors=[], sizes=[], increase, decrease, choose, checkstate}) => (
    <div className="shoppingcart">
        {/* 选择小圆圈 */}
        {/* 受控组件 */}
        <input type="checkbox" checked={checkstate} onChange={() => choose(id, checkstate)}/>
        <p>{id}</p>
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
                    <span className="decrease" onClick={() => decrease(id)}>-</span>
                    <span>{qty}</span>
                    <span className="increase" onClick={() => increase(id)}>+</span>
                </div>
            </div>
        </div>
    </div>
)

export default  ({cart=[], colors=[], sizes=[], increase, decrease, choose, checkstate, count, total}) => (
    <div className="chooseshade">
        <div className="choosepop">
            {cart.map(item=>(
                <Item key={item.id} {...item} colors={colors} sizes={sizes} increase={increase} decrease={decrease} checkstate={checkstate} choose={choose} count={count} total={total} />
            ))}
            {
                cart.length > 0 ?
                <div className="surebox">
                    <div className="checkall">
                        <input type="checkbox" />全选
                    </div>
                    <div className="count">
                        结算({count})
                    </div>
                    <div className="total">
                        合计：
                        <span>￥{total}</span>
                    </div>
                </div> : null
            }

        </div>
    </div>
)