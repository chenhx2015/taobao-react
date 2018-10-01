import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const ModuleSection =  (className, tipClass, title) => ({list=[] }) => (
    <div className={className}>
        <span className={tipClass}>{title}</span>
        {
            list.map(item => (
                <li><Link to={item.url}><img src={item.img} alt=""/></Link></li>
            ))
        }
    </div>
)
const FashItems = ModuleSection('fashionItem', 'fashionTip', '时尚大咖')
const CheapGoods = ModuleSection('fashionItem', 'salegoodTip', '实惠好货')
const AllGoods = ModuleSection('fashionItem', 'allgoodTip', '买遍全球')

export default ({fashList, cheapList, allList}) => (
    <div className="eachModule">
        {/* 时尚大咖 */}
        <FashItems list={fashList}/>
        {/* 实惠好货 */}
        <CheapGoods list={cheapList}/>
        {/* <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li> */}
        {/* 买遍全球 */}
        <AllGoods list={allList}/>
    </div>
)