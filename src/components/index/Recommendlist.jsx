import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/index/recommendgood.css'

let ListItem = ( {price, num, intro, imgurl,id} ) => (
    <li className="recommendgoodli">
        <Link to={"/products/" + id} >
            <div className="picdiv">
                <img src={imgurl} alt=""/>
            </div>
            <p>{intro}</p>
            <p>
                <span className="price">{price}</span>
                <span>{num}</span>
            </p>
        </Link>
    </li>
)

export default ({list=[]}) => {
    return (
        <div>
            <p >猜你喜欢</p>
            <ul className="recommendgoodul">
            { list.map((item) =>
                <ListItem key={item.id} imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} id={item.id}></ListItem>
            )}
            </ul>
        </div>
    )
}

