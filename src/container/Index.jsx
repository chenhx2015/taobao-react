import React, { Component , ReactFragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'

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

const Home = () => {
    return (
        <div className="indexPage">
            <ul className="nav-icon-ul">
                <li><Link to="/tmall"><div></div>天猫</Link></li>
                <li><Link to="/hot"><div></div>聚划算</Link></li>
                <li><Link to="/tmallhk"><div></div>天猫国际</Link></li>
                <li><Link to="/takeout"><div></div>外卖</Link></li>
                <li><Link to="/tmallmkt"><div></div>天猫超市</Link></li>

                <li><Link to="/charge"><div></div>充值中心</Link></li>
                <li><Link to="/flypigtravel"><div></div>飞猪旅行</Link></li>
                <li><Link to="/goldcoin"><div></div>领金币</Link></li>
                <li><Link to="/auction"><div></div>拍卖</Link></li>
                <li><Link to="/classify"><div></div>分类</Link></li>
            </ul>
            {/* 热门商品 */}
            <ul className="topGoodsList">
                <li><Link to="/"><img src={require('../images/index/img-hot-1.png')} alt=""/></Link></li>
                <li><Link to="/"><img src={require('../images/index/img-hot-2.png')} alt=""/></Link></li>

                <li><Link to="/"><img src={require('../images/index/img-hot-3.png')} alt=""/></Link></li>
                <li><Link to="/"><img src={require('../images/index/img-hot-4.png')} alt=""/></Link></li>

                <li><Link to="/"><img src={require('../images/index/img-hot-5.png')} alt=""/></Link></li>
                <li><Link to="/"><img src={require('../images/index/img-hot-6.png')} alt=""/></Link></li>
            </ul>
            {/* 各个大模块 */}
            <div className="eachModule">
                {/* 时尚大咖 */}
                <div className="fashionItem">
                    <span className="fashionTip">时尚大咖</span>
                    <li><Link to="/"><img src={require('../images/index/icon-module-1.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-0.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                </div>
                {/* 实惠好货 */}
                <div className="fashionItem">
                    <span className="salegoodTip">实惠好货</span>
                    <li><Link to="/"><img src={require('../images/index/icon-module-1.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-0.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                </div>
                {/* 买遍全球 */}
                <div className="fashionItem">
                    <span className="allgoodTip">买遍全球</span>
                    <li><Link to="/"><img src={require('../images/index/icon-module-1.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-0.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-3.png')} alt=""/></Link></li>
                    <li><Link to="/"><img src={require('../images/index/icon-module-2.png')} alt=""/></Link></li>
                </div>
                {/* 潮流酷玩 */}

            </div>
        </div>

    )
}
export default class Index extends Component {

    render() {
        return (
            <Switch>
                <Route path="/tmall" component={Tmall} />
                <Route path="/hot" component={Hot} />
                <Route path="/tmallhk" component={Tmallhk} />
                <Route path="/takeout" component={Takeout} />
                <Route path="/tmallmkt" component={Tmallmkt} />

                <Route path="/charge" component={Charge} />
                <Route path="/flypigtravel" component={Flypigtravel} />
                <Route path="/goldcoin" component={Goldcoin} />
                <Route path="/auction" component={Auction} />
                <Route path="/classify" component={Classify} />
                <Route exact path='/' component={Home} />
            </Switch>
        )
    }

}
