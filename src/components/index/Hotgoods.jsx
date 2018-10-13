import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const SectionItem = ( {price, num, intro, imgurl,id} ) => (
    <li><Link to={"/products/" + id}><img src={imgurl} alt=""/></Link></li>
)

export const GoodsSection = (className) => {
    return ({hotlist=[]}) => {
        return (
            <ul className={className}>
                {
                    hotlist.map( item => (
                        <SectionItem key={item.id} imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id} id={item.id} />
                    ))
                }
            </ul>
        )
    }
}

export default GoodsSection('topGoodsList')