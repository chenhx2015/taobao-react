import React,{ Component } from 'react'
import Indexnav from './Indexnav'
import Hotgoods from './Hotgoods'
import Eachmodule from './Eachmodule'
import RecommendList from './Recommendlist'

const Loading = ({showLoading}) => {
    return (
        showLoading ?
        <div className="loading">Loading...</div> :
        null
    )
}
const Index = ({recommends, hots, cheaps, fashions, globals, showLoading=false}) => {
    return (
        <div>
            <Loading showLoading={showLoading} />
            <div className="indexPage">
                <Indexnav />
                {/* 热门商品 */}
                <Hotgoods hotlist={hots}/>
                {/* 各个大模块 */}
                <Eachmodule fashions={fashions} cheaps={cheaps} globals={globals} />
                {/* 猜你喜欢 */}
                <div className="recommendgoods">
                    {/* 推荐产品列表组件 猜你喜欢 */}
                    <RecommendList list={recommends} />
                </div>
            </div>
        </div>
    )
}

export default class IndexClass extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchRecommends()
        this.props.fetchHots()
        this.props.fetchCheaps()
        this.props.fetchFashions()
        this.props.fetchGlobals()
    }
    render() {
        return (
            <Index {...this.props}/>
        )
    }
}