import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import '../styles/my/index.css'

// 顶部信息
const Infocard = () => {
    return (
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
}
// 会员部分
const Member = () => {
    return (
        <div className="member">
            <div className="membervalue">
                <div>88会员</div>
                <div>淘气值718</div>
            </div>
            <div className="membertip">
                <div>花小积分 兑大权益</div>
                <div>抢兑万豪/飞猪等会员权益</div>
            </div>
            <div className="membercard">会员中心</div>
        </div>
    )
}
const Myordercard = () => {
    return (
        <div className="Myordercard">

        </div>
    )
}

export default class Myindex extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="myindex">
                <Infocard />
                <Member />
                <Myordercard />
            </div>
        )
    }
}