import React, { Component , ReactFragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'

import PropTypes from 'prop-types'
import axios from 'axios'
import getListAction from '../store/action/actions'

import { connect } from 'react-redux'

import Tmall from '../components/index/Tmall'
import Hot from '../components/index/Hot'
import Tmallhk from '../components/index/Tmallhk'
import Takeout from '../components/index/Takeout'
import Tmallmkt from '../components/index/Tmallmkt'

import Charge from '../components/index/Charge'
import Flypigtravel from '../components/index/Flypigtravel'
import Goldcoin from '../components/index/Goldcoin'
import Auction from '../components/index/Auction'
import Classify from '../components/index/Classify'

import RecommendList from '../components/index/Recommendlist'
import Recommend from '../components/index/recommend/route'

const Home = () => {
    return (
        <div className="indexPage">
            <ul className="nav-icon-ul">
                <li><a href="/tmall"><div></div>天猫</a></li>
                <li><a href="/hot"><div></div>聚划算</a></li>
                <li><a to="/tmallhk"><div></div>天猫国际</a></li>
                <li><a to="/takeout"><div></div>外卖</a></li>
                <li><a to="/tmallmkt"><div></div>天猫超市</a></li>

                <li><a to="/charge"><div></div>充值中心</a></li>
                <li><a to="/flypigtravel"><div></div>飞猪旅行</a></li>
                <li><a to="/goldcoin"><div></div>领金币</a></li>
                <li><a to="/auction"><div></div>拍卖</a></li>
                <li><a to="/classify"><div></div>分类</a></li>
            </ul>
            {/* 热门商品 */}
            <ul className="topGoodsList">
                <li><Link to="/"><img src='/images/index/img-hot-1.png' alt=""/></Link></li>
                <li><Link to="/"><img src='/images/index/img-hot-2.png' alt=""/></Link></li>

                <li><Link to="/"><img src='/images/index/img-hot-3.png' alt=""/></Link></li>
                <li><Link to="/"><img src='/images/index/img-hot-4.png' alt=""/></Link></li>

                <li><Link to="/"><img src='/images/index/img-hot-5.png' alt=""/></Link></li>
                <li><Link to="/"><img src='/images/index/img-hot-6.png' alt=""/></Link></li>
            </ul>
            {/* 各个大模块 */}
            <div className="eachModule">
                {/* 时尚大咖 */}
                <div className="fashionItem">
                    <span className="fashionTip">时尚大咖</span>
                    <li><Link to="/"><img src='/images/index/icon-module-1.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-0.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                </div>
                {/* 实惠好货 */}
                <div className="fashionItem">
                    <span className="salegoodTip">实惠好货</span>
                    <li><Link to="/"><img src='/images/index/icon-module-1.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-0.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                </div>
                {/* 买遍全球 */}
                <div className="fashionItem">
                    <span className="allgoodTip">买遍全球</span>
                    <li><Link to="/"><img src='/images/index/icon-module-1.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-0.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-3.png' alt=""/></Link></li>
                    <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li>
                </div>
                {/* 潮流酷玩 */}
            </div>
            {/* 猜你喜欢 */}
            <div className="recommendgoods">
                {/* 推荐产品列表组件 猜你喜欢 */}
                <RecommendList />
            </div>
        </div>

    )
}
export class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listdata: []
        }
    }
    render() {
        return (
            <Switch>
                {/* <Route path="/tmall" component={Tmall} />
                <Route path="/hot" component={Hot} />
                <Route path="/tmallhk" component={Tmallhk} />
                <Route path="/takeout" component={Takeout} />
                <Route path="/tmallmkt" component={Tmallmkt} />

                <Route path="/charge" component={Charge} />
                <Route path="/flypigtravel" component={Flypigtravel} />
                <Route path="/goldcoin" component={Goldcoin} />
                <Route path="/auction" component={Auction} />
                <Route path="/classify" component={Classify} />
                 */}
                <Route exact path='/' component={Home} />
                <Route  path='/recommend' component={Recommend} />

            </Switch>
        )
    }

    static contextTypes = {
        store: PropTypes.object
    }
    componentDidMount() {
        console.log('lplp')
        console.log(this.context.store)
        const store = this.context.store
        axios.get('/mockData/goods.json').then(
            (res) => {
                console.log(store)
                console.log(res.data)
                this.setState({listdata: res.data})
                console.log('newlistdata--', this.state.listdata)
                // store.dispatch(getListAction(this.state.listdata))
            }
        )
    }
}

const mapStateToProps = (state) => {
   console.log('--state--', state)
    return {
        listdata: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getListAction(this.state.listdata))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RecommendList)

