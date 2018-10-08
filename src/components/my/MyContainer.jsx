import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Infocard from './InfoCard'
import Member from './Member'
import Myordercard from './Myordercard'

export default class MyContainer extends Component {
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