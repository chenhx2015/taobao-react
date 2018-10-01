import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'
import fetch from 'cross-fetch'
import { addgoods } from '../store/action/actions'
import { connect } from 'react-redux'
import Indexnav from '../components/index/Indexnav'
import Hotgoods from '../components/index/Hotgoods'
import Eachmodule from '../components/index/Eachmodule'
import RecommendList from '../components/index/Recommendlist'
import Recommend from '../components/index/recommend/route'

const Home = () => {
    return (
        <div className="indexPage">
            <Indexnav />
            {/* 热门商品 */}
            <Hotgoods />
            {/* 各个大模块 */}
            <Eachmodule />
            {/* 猜你喜欢 */}
            <div className="recommendgoods">
                {/* 推荐产品列表组件 猜你喜欢 */}
                <RecommendListContainer />
            </div>
        </div>
    )
}

const fetchData = (dispatch, getState) => {
    return fetch('/mockData/goods.json',{}).then( res => {
        return res.json()
    }).then(res => {
        dispatch(addgoods(res))
    })
}
export class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/recommend' component={Recommend} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({listdata: state.goods})
const mapDispatchToProps = (dispatch, state) => ({
    fetchList: () => dispatch(fetchData)
})
const RecommendListContainer = connect(mapStateToProps, mapDispatchToProps)(RecommendList)

export default Index

