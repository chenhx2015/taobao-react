import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Detail from './detail'

let ListItem = ( {location, price, num, intro, imgurl} ) => {

    const item = (
        <li>
            <Link to={location + "/Detail"} >
                <img src={imgurl} alt=""/>
                <p>{intro}</p>
                <p>
                    <span>{price}</span>
                    <span>{num}</span>
                </p>
            </Link>
        </li>
    )
    return item
}

let RecommendgoodsItem = ( props ) => {
    const listArray = props.listArray
    const listItem = listArray.map((item) =>
        <ListItem imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id}></ListItem>
    )
    return listItem
}

export default RecommendgoodsItem
