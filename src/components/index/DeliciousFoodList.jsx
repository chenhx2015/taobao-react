import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import '../../styles/index/deliciousFoodListPage.css'

// import DeliciousFoodList from './DeliciousFoodList'

export default class DeliciousFoodList extends Component {
   
    render() {
        return (
            <div className="deliciousFoodListPage">
                <div className="deliciousFoodul">
                    <div className="food-img">
                        <img src='/images/nav5.png' alt=""/>
                    </div>
                    <div className="food-intro">
                        <p className="store-name">温汤人家（温汤大酒店餐饮部）</p>
                        <p>
                            <span className="star">AAAA</span>
                            <span className="price">¥65元/人</span>
                        </p>
                        <p className="address">江西菜 明月山风景区</p>
                        <p className="intro-text">
                            <span>明月山美食热门榜第一名</span>
                            <span>"做的最好吃的是琵琶鸭"</span>
                        </p>
                        <p className="navigation">位于宜春明月山温汤大酒店内</p>
                        <p className="group-buy-price">188元6人餐，88元4人餐，88元双人餐</p>
                    </div>
                </div>

                <div className="deliciousFoodul">
                    <div className="food-img">
                        <img src='/images/nav3.png' alt=""/>
                    </div>
                    <div className="food-intro">
                        <p className="store-name">温汤人家（温汤大酒店餐饮部）</p>
                        <p>
                            <span className="star">AAAA</span>
                            <span className="price">¥65元/人</span>
                        </p>
                        <p className="address">江西菜 明月山风景区</p>
                        <p className="intro-text">
                            <span>明月山美食热门榜第一名</span>
                            <span>"做的最好吃的是琵琶鸭"</span>
                        </p>
                        <p className="navigation">位于宜春明月山温汤大酒店内</p>
                        <p className="group-buy-price">188元6人餐，88元4人餐，88元双人餐</p>
                    </div>
                </div>
            </div> 
        ) 
    } 
}
       