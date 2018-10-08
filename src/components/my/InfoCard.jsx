import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

// 顶部信息
const InfoCard = () => (
    <div className="infocard">
        <div className="infocardbox">
            <div className="img">
                <img src="/images/index/icon-delifood-1.png" alt=""/>
            </div>
            <div className="info">
                <p className="num">tb376078529</p>
                <span className="account">我的亲情账号</span>
            </div>
            <span className="setting">设置</span>
            <div className="tab">
                <ul>
                    <li><Link to="/"><p>28</p><p>收藏夹</p></Link></li>
                    <li><Link to="/"><p>26</p><p>关注店铺</p></Link></li>
                    <li><Link to="/"><p>465</p><p>足迹</p></Link></li>
                    <li><Link to="/"><p>13</p><p>红包卡券</p></Link></li>
                </ul>
            </div>
        </div>
    </div>
)
export default InfoCard