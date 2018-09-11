import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class My extends Component {
    render() {
        return (
            <div className="myPage">
                <ul>
                    <li><Link to="">我的</Link></li>
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
