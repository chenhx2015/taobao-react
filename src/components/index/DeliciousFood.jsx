import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import DeliciousFoodList from './DeliciousFoodList'

export default class DeliciousFood extends Component {
   
    render() {
        return (
            <div className="deliciousFoodPage">
               <DeliciousFoodList></DeliciousFoodList>
            </div>
        )
    }
}
