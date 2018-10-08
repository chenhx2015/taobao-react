import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import MyContainer from '../components/my/MyContainer'

import '../styles/my/index.css'

export default class Myindex extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MyContainer />
        )
    }
}