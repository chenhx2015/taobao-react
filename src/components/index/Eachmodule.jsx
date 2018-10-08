import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const SectionItem = ( {price, num, intro, imgurl,id} ) => (
    <li className="">
        <Link to={"/products/" + id} >
            <div className="">
                <img src={imgurl} alt=""/>
            </div>
            <p>{intro}</p>
            <p>
                <span className="price">{price}</span>
                <span>{num}</span>
            </p>
        </Link>
    </li>
)

const ModuleSection =  (className, tipClass, title) => ({list=[] }) => (
    <div className={className}>
        <span className={tipClass}>{title}</span>
        {
            list.map(item => (
                <SectionItem key={item.id} imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id} id={item.id}/>
            ))
        }
    </div>
)

const FashItems = ModuleSection('fashionItem', 'fashionTip', '时尚大咖')
const CheapGoods = ModuleSection('fashionItem', 'salegoodTip', '实惠好货')
const AllGoods = ModuleSection('fashionItem', 'allgoodTip', '买遍全球')

export default ({fashions, cheaps, globals}) => (
    <div className="eachModule">
        {/* 时尚大咖 */}
        <FashItems list={fashions}/>
        {/* 实惠好货 */}
        <CheapGoods list={cheaps}/>
        {/* <li><Link to="/"><img src='/images/index/icon-module-2.png' alt=""/></Link></li> */}
        {/* 买遍全球 */}
        <AllGoods list={globals}/>
    </div>
)