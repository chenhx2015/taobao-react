import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'
import fetch from 'cross-fetch'
import { addgoods } from '../store/action/actions'
import { connect } from 'react-redux'
import Home from '../components/index'


const fetchRecommends = (dispatch, getState) => {
    return fetch('/mockData/goods.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addgoods(res))
    })
}

const mapStateToProps = (state) => ({
    recommends: state.goods, 
})

const mapDispatchToProps = (dispatch, state) => ({
    fetchRecommends: () => dispatch(fetchRecommends),
    fetchHots: () => dispatch(fetchRecommends),
    fetchCheaps: () => dispatch(fetchRecommends),
    fetchFashions: () => dispatch(fetchRecommends),
    fetchOnSales: () => dispatch(fetchRecommends),
    fetchGlobals: () => dispatch(fetchRecommends),
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default () => (
    <Route exact path='/' component={HomeContainer} />
)
 