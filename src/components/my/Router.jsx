import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const Infocard = () => {
    return (
        <div className="infocard">
            <div>
                <div className="img">
                    <img src="/public/images/index/icon-delifood-1.png" alt=""/>
                </div>
                <div className="info">
                    <p>tb376078529</p>
                    <p>我的亲情账号</p>
                </div>
                <span>设置</span>
            </div>
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
            </div>
        )
    }
}