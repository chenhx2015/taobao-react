import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import MakerOrder from '../components/my/MakeOrder'
import MyContainer from '../components/my/MyContainer'

import '../styles/my/index.css'

export default ({location, match}) => (
    <Switch>
        <Route path={match.path + '/makeOrder'} component={MakerOrder}/>
        <Route path={match.path } component={MyContainer}/>
    </Switch>
)