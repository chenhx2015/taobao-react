import React, { Component } from 'react'
import axios from 'axios'
import Item from './item'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // listArray: []
            listArray:[
                {
                    "id": "20180912001",
                    "imgurl": "/images/index/pic-recommend-1.png",
                    "intro": "www意大利代购Gucci/古奇女包蜜蜂单肩",
                    "price": "¥4080",
                    "num": "23人付款"
                },
                {
                    "id": "20180912002",
                    "imgurl": "/images/index/pic-recommend-2.png",
                    "intro": "qqq意大利代购Gucci/古奇女包蜜蜂单肩",
                    "price": "¥4080",
                    "num": "23人付款"
                },
                {
                    "id": "20180912003",
                    "imgurl": "/images/index/pic-recommend-3.png",
                    "intro": "ttt意大利代购Gucci/古奇女包蜜蜂单肩",
                    "price": "¥4080",
                    "num": "23人付款"
                },
                {
                    "id": "20180912004",
                    "imgurl": "/images/index/pic-recommend-4.png",
                    "intro": "hhh意大利代购Gucci/古奇女包蜜蜂单肩",
                    "price": "¥4080",
                    "num": "23人付款"
                },
                {
                    "id": "20180912005",
                    "imgurl": "/images/index/pic-recommend-5.png",
                    "intro": "kkk意大利代购Gucci/古奇女包蜜蜂单肩",
                    "price": "¥4080",
                    "num": "23人付款"
                }
            ]
        }
        // this.getData = this.getData.bind(this)  // 也可以使用箭头函数
    }
    // getData() {
    //     axios.get('/mockData/recommendgoods.json').then((res) => {
    //         console.log(res.goods)
    //         // setState 是异步执行的函数
    //         this.setState(() => {
    //             return {
    //                 listArray: res.goods
    //             }
    //         })
    //         console.log('popo--', this.state.listArray)
    //     }).catch((err) => {
    //         console.log(err.status)
    //     })
    // }
    render() {
        return (
            <ul className="recommendgoodul">
               <Item listArray={this.state.listArray}/>
            </ul>
        )
    }
}



