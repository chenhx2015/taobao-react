import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({price, num}) => {
    return(
        <li >
            <Link to="">
            <p>{ price }</p>
            <p>{ num }</p>
            </Link>
        </li>
    )
}
export default ({list=[]}) => {
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
    )
}



