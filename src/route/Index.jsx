import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'
import fetch from 'cross-fetch'
import { addgoods, addhots } from '../store/action/actions'
import { connect } from 'react-redux'
import Home from '../components/index'

// 推荐列表
const fetchRecommends = (dispatch, getState) => {
    return fetch('/mockData/goods.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addgoods(res))
    })
}
// 热门商品
const fetchHots = (dispatch, getState) => {
    return fetch('./mockData/hots.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addhots(res))
    })
}

const fetchCheaps = (dispatch, getState) => {
    // return fetch('./mockData/hots.json',{}).then( res => {
    //     return res.json()
    // }).then(res => {
    //     dispatch(addhots(res))
    // })
}

const fetchFashions = (dispatch, getState) => {
    // return fetch('./mockData/hots.json',{}).then( res => {
    //     return res.json()
    // }).then(res => {
    //     dispatch(addhots(res))
    // })
}

const fetchGlobals = (dispatch, getState) => {
    // return fetch('./mockData/hots.json',{}).then( res => {
    //     return res.json()
    // }).then(res => {
    //     dispatch(addhots(res))
    // })
}

const mapStateToProps = (state) => ({
    recommends: state.goods.filter(item=>item.tag==='recommend'),
    hots: state.goods.filter(item=>item.tag==='hot')
})

const mapDispatchToProps = (dispatch, state) => ({
    fetchRecommends: () => dispatch(fetchRecommends),
    fetchHots: () => dispatch(fetchHots),
    fetchCheaps: () => dispatch(fetchCheaps),
    fetchFashions: () => dispatch(fetchFashions),
    fetchGlobals: () => dispatch(fetchGlobals),
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default () => (
    <Route exact path='/' component={HomeContainer} />
)
