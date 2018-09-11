import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class ShoppingCart extends Component {
    render() {
        return (
            <div className="shoppingcartPage">
                <ul>
                    <li><div></div><Link to="">ShoppingCart</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>

                    <li><div></div><Link to="">电影</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                    <li><div></div><Link to="">美食</Link></li>
                </ul>
            </div>
        )
    }
}
