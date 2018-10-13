import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'
import fetch from 'cross-fetch'
import { addgoods, addhots, addfashions, addcheaps, addglobals, showLoading } from '../store/action/actions'
import { connect } from 'react-redux'
import Home from '../components/index'

// 推荐列表
const fetchRecommends = (dispatch, getState) => {
    dispatch(showLoading(true))
    return fetch('/mockData/goods.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addgoods(res))
        dispatch(showLoading(false))
        return res
    })
}
// 热门商品
const fetchHots = (dispatch, getState) => {
    dispatch(showLoading(true))
    return fetch('./mockData/hots.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addhots(res))
        dispatch(showLoading(false))
        return res
    })
}
// 时尚大咖
const fetchFashions = (dispatch, getState) => {
    dispatch(showLoading(true))
    return fetch('./mockData/fashions.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addfashions(res))
        dispatch(showLoading(false))
        return res
    })
}
// 实惠好货
const fetchCheaps = (dispatch, getState) => {
    dispatch(showLoading(true))
    return fetch('./mockData/cheaps.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addcheaps(res))
        dispatch(showLoading(false))
        return res
    })
}
// 买遍全球
const fetchGlobals = (dispatch, getState) => {
    dispatch(showLoading(true))
    return fetch('./mockData/globals.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addglobals(res))
        dispatch(showLoading(false))
        return res
    })
}

const mapStateToProps = (state) => ({
    recommends: state.goods.filter(item=>item.tag==='recommend'),
    hots: state.goods.filter(item=>item.tag==='hot'),
    fashions: state.goods.filter(item=>item.tag === 'fashion'),
    cheaps: state.goods.filter(item=>item.tag === 'cheap'),
    globals: state.goods.filter(item=>item.tag === 'global'),
    showLoading: state.loading
})

const mapDispatchToProps = (dispatch, state) => ({
    fetchRecommends: () => dispatch(fetchRecommends),
    fetchHots: () => dispatch(fetchHots),
    fetchFashions: () => dispatch(fetchFashions),
    fetchCheaps: () => dispatch(fetchCheaps),
    fetchGlobals: () => dispatch(fetchGlobals),
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default () => (
    <Route exact path='/' component={HomeContainer} />
)
