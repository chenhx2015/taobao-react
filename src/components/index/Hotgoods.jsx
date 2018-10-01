import React from 'react' 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

export const GoodsSection =  (className) => {
    return ({list=[]}) => (
        <ul className={className}>
            {
                list.map( item => {
                    <li><Link to={item.url}><img src={item.img} alt=""/></Link></li>
                })
            }
            {/* <li><Link to="/"><img src='/images/index/img-hot-1.png' alt=""/></Link></li>
            <li><Link to="/"><img src='/images/index/img-hot-2.png' alt=""/></Link></li>

            <li><Link to="/"><img src='/images/index/img-hot-3.png' alt=""/></Link></li>
            <li><Link to="/"><img src='/images/index/img-hot-4.png' alt=""/></Link></li>

            <li><Link to="/"><img src='/images/index/img-hot-5.png' alt=""/></Link></li>
            <li><Link to="/"><img src='/images/index/img-hot-6.png' alt=""/></Link></li> */}
        </ul>
    )
}


export default GoodsSection('topGoodsList')