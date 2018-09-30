import React, {Component} from 'react'
import WeitaoList from './WeitaoList'
import fetch from 'cross-fetch'

export default class WeitaoContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            listData: []
        }
    }
    render() {
        return (
            <WeitaoList list={this.state.listData} />
        )
    }
    componentDidMount() {
        fetch('/mockData/weitao.json',{}).then(res => {
            return  res.json()
        }).then(res =>{
            this.setState({
                listData: res.listData
            })
            return res
        }).catch(error => {
    
        })
    }
}
