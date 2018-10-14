import React from 'react'
import '../../styles/my/allorder.css'

const Item = ({imgurl, intro, price, qty}) => {
    return (
        <div className="intro">
            <div className="imgbox">
                <img src={imgurl} alt=""/>
            </div>
            <div className="introtext">
                <p className="intro">{intro}</p>
                <p className="price">¥{price}</p>
            </div>
            <div className="num">
                <span>{qty}</span>
            </div>
        </div>
    )
}
export default ({ allorder, match, location, history}) => {
    // console.log(match,location, history)
    // const allorder = location.state
    return (
        <div className="allorder">
            {
                allorder.map((item) => {
                    return (
                        <Item {...item} key={item.id} />
                    )
                })
            }
        </div>
    )
}