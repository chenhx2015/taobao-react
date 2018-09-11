import React, { Component , ReactFragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import '../styles/index/index.css'

import DeliciousFood from '../components/index/DeliciousFood'
import Film from '../components/index/Film'
import Hotel from '../components/index/Hotel'
import Advertisement from '../components/index/Advertisement'
import FastFood from '../components/index/FastFood'
import Pedicure from '../components/index/Pedicure'
import HairDressing from '../components/index/HairDressing'
import Scenic from '../components/index/Scenic'
import Shopping from '../components/index/Shopping'
import Service from '../components/index/Service'


const Home = () => {
    return (
        <div className="indexPage">
            <ul>
                <li><Link to="/deliciousFood"><div></div>美食</Link></li>
                <li><Link to="/film"><div></div>电影/演出</Link></li>
                <li><Link to="/hotel"><div></div>酒店</Link></li>
                <li><Link to="/advertisement"><div></div>休闲娱乐</Link></li>
                <li><Link to="/fastFood"><div></div>外卖</Link></li>

                <li><Link to="/pedicure"><div></div>按摩/足疗</Link></li>
                <li><Link to="/hairDressing"><div></div>丽人/美发</Link></li>
                <li><Link to="/scenic"><div></div>景点/门票</Link></li>
                <li><Link to="/service"><div></div>生活服务</Link></li>
                <li><Link to="/shopping"><div></div>购物</Link></li>
            </ul>
            {/* 每日福利 */}
            <div className="benefits">

            </div>
            <div className="storeList">
                <div className="rank">
                    <span>排行榜</span>
                    <span>袁州区湘菜热门榜第1名</span>
                    <span>></span>
                </div>
                <div className="foodContent">

                </div>
            </div>
        </div>

    )
}



export default class Index extends Component {

    render() {
        return (
            <Switch>
                <Route path="/deliciousFood" component={DeliciousFood} />
                <Route path="/film" component={Film} />
                <Route path="/hotel" component={Hotel} />
                <Route path="/advertisement" component={Advertisement} />
                <Route path="/fastFood" component={FastFood} />

                <Route path="/pedicure" component={Pedicure} />
                <Route path="/hairDressing" component={HairDressing} />
                <Route path="/scenic" component={Scenic} />
                <Route path="/service" component={Service} />
                <Route path="/shopping" component={Shopping} />
                <Route exact path='/' component={Home} />
            </Switch>
        )
    }

}
