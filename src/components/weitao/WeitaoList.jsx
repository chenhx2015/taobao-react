import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({price, num}) => (
    <li >
        <Link to="">
        <p>{ price }</p>
        <p>{ num }</p>
        </Link>
    </li>
)
const WeitaoPage = ({list=[]}) => { 
    return (
    <div className="weitaoPage">
        <ul>
            {
                list.map( item => (
                    <ListItem key={item.id} {...item}/>
                ))
            }
            
        </ul>
    </div>
)}
export default class WeitaoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <WeitaoPage {...this.props} />
        )
    }
    componentDidMount() {
        this.props.fetchData()
    }
}


  