import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class Hiking extends Component {
    render() {
        return (
            <div className="hikingPage">
                <ul>
                    <li><div></div><Link to="">足迹</Link></li>
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
