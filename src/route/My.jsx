import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { makeallorder } from '../store/action/actions'
import MakerOrder from '../components/my/MakeOrder'
import MyContainer from '../components/my/MyContainer'
import AllOrder from '../components/my/Allorder'

import '../styles/my/index.css'

const mapStateToProps = (state) => ({
    allorder: state.allorder
})
const mapDispatchToProps = (dispatch, state) => ({
    submit: (id, imgurl, price, intro, qty) => { dispatch(makeallorder({id, imgurl, price, intro, qty})) }
})

const MakeOrdercontainer = connect(mapStateToProps, mapDispatchToProps)(MakerOrder)
const AllOrderContainer = connect(mapStateToProps, mapDispatchToProps)(AllOrder)
export default ({location, match}) => (
    <Switch>
        <Route path={match.path + '/allorder'} component={AllOrderContainer} />
        <Route path={match.path + '/makeOrder'} component={MakeOrdercontainer}/>
        <Route path={match.path } component={MyContainer}/>
    </Switch>
)