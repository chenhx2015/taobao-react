import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../styles/index/recommendgood.css'

let ListItem = ( {price, num, intro, imgurl,id} ) => (
    <li className="recommendgoodli">
        <Link to={"/recommend/" + id} >
            <div className="picdiv">
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


const Recommendgoodul = ({listdata=[]}) => {
    return (
        <div>
            <p >猜你喜欢</p>
            <ul className="recommendgoodul">
            { listdata.map((item) =>
                <ListItem key={item.id} imgurl={item.imgurl} intro={ item.intro} price={item.price} num={item.num} key={item.id} id={item.id}></ListItem>
            )}
            </ul>
        </div>
    )
}
export default class RecommendList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchList()
    }
    render() {
        return (
            <Recommendgoodul {...this.props}/>
        )
    }
}
