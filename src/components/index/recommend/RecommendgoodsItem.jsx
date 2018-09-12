import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import GoodsDetail from './GoodsDetail'

// let toDetail = (id, imgurl, price, intro, num) => {
//     let data = { 'id': id, 'imgurl': imgurl, 'price': price, 'intro': intro, 'num': intro}
//     let path = {
//         pathname: '/goodsDetail',
//         query: data
//     }
//     hashHistory.push(path)
// }

{/* <Route path='/goodsDetail' component={GoodsDetail}></Route> */}



let ListItem = ( props ) => {
    <Route path="/goodsDetail" component={GoodsDetail} />
    const item = (
        // <li onClick={() => toDetail(props.id, props.imgurl, props.price, props.intro, props.num)}>
        <li>
            <Link to="/goodsDetail" >
                {/* <img src={require(props.imgurl)} alt=""/> */}
                <img src={require('../../../images/index/pic-recommend-1.png')} alt=""/>
                <p>{props.intro}</p>
                <p>
                    <span>{props.price}</span>
                    <span>{props.num}</span>
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
