import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

let ListItem = ( {price, num, intro, imgurl} ) => (
        // <li onClick={() => toDetail(props.id, props.imgurl, props.price, props.intro, props.num)}>
        <li>
            <Link to={"/recommend/Detail"} >
                <img src={imgurl} alt=""/>
                <p>{intro}</p>
                <p>
                    <span>{price}</span>
                    <span>{num}</span>
                </p>
            </Link>
        </li>
    )


let Item = ( props ) => {
    const listItem = props.listArray.map((item) =>
        <ListItem imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id}></ListItem>
    )
    return listItem
}

export default class List extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     listArray: []
        // }
    }
    render() {
        const { state, getData } = this.props
        return (
            <ul className="recommendgoodul">
               <Item listArray={state}/>
            </ul>
        )
    }
}



