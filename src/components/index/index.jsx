import React,{ Component } from 'react'
import Indexnav from './Indexnav'
import Hotgoods from './Hotgoods'
import Eachmodule from './Eachmodule'
import RecommendList from './Recommendlist'

const Index = ({recommends, hots, cheaps, fashions, globals, onsales}) => {
    return (
        <div className="indexPage">
            <Indexnav />
            {/* 热门商品 */}
            <Hotgoods list={hots}/>
            {/* 各个大模块 */}
            <Eachmodule cheaps={cheaps} fashions={fashions} globals={globals} onsales={onsales} />
            {/* 猜你喜欢 */}
            <div className="recommendgoods">
                {/* 推荐产品列表组件 猜你喜欢 */}
                <RecommendList list={recommends} />
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
        this.props.fetchOnSales()
        this.props.fetchGlobals()
    }
    render() {
        return (
            <Index {...this.props}/>
        )
    }
}