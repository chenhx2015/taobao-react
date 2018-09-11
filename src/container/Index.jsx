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
            <ul>
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
            {/* 每日福利 */}
            <div className="benefits">

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
