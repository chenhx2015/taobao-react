import React from 'react'

const Item = ({id, imgurl, price, intro, qty, increase, decrease, choose, unchoose, checkstate}) => {
    const changeInput = () => {
        checkstate ? unchoose(id) : choose({id, qty, price, imgurl})
    }
    return (
    <div className="shoppingcart">
        {/* 选择小圆圈 */}
        {/* 受控组件 */}
        <input type="checkbox" checked={checkstate} onChange={ changeInput }/>
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
    }

export default  ({order, cart=[], increase, decrease, choose, unchoose, checkstates=[]}) => {
    let count = order.length
    let total = order.reduce((sum, item)=> sum + parseInt(item.qty) * parseInt(item.price), 0)
    const changeInput = () => { 
        if(checkstates.length === cart.length) {
            unchoose(cart.map(item=> item.id)) 
        }else{ 
            choose(cart.map(item=>({id: item.id, qty:item.qty, price:item.price, imgurl:item.imgurl})) )
        }
    }
    return (
        <div className="chooseshade">
            <div className="choosepop">
                {cart.map(item=>(
                    <Item key={item.id} {...item} checkstate={checkstates.indexOf(item.id) === -1 ? false:true} increase={increase} decrease={decrease} choose={choose} unchoose={unchoose} />
                ))}
                {
                    cart.length > 0 ?
                    <div className="surebox">
                        <div className="checkall">
                            <input type="checkbox" checked={checkstates.length ===cart.length} onChange={changeInput}/>全选
                        </div>
                        <div className="count">
                            结算({count})
                        </div>
                        <div className="">
                            合计：
                            <span>￥{total} </span>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

