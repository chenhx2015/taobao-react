import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Discount extends Component {
    render() {
        return (
            <div className="discountPage">
                <ul>
                    <li><Link to="">优惠</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>

                    <li><Link to="">电影</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>
                    <li><Link to="">美食</Link></li>
                </ul>
            </div>
        )
    }
}
