import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const SectionItem = ( {price, num, intro, imgurl,id} ) => (
    // <li className="">
    //     <Link to={"/products/" + id} >
    //         <div className="">
    //             <img src={imgurl} alt=""/>
    //         </div>
    //         <p>{intro}</p>
    //         <p>
    //             <span className="price">{price}</span>
    //             <span>{num}</span>
    //         </p>
    //     </Link>
    // </li>
    <li><Link to={"/products/" + id}><img src={imgurl} alt=""/></Link></li>
)

export const GoodsSection =  (className) => {
    return ({hotlist=[]}) => (
        <ul className={className}>
            {
                hotlist.map( item => {
                    <SectionItem key={item.id} imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id} id={item.id}/>
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