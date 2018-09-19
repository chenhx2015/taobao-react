import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../../styles/index/dchoose.css'
import {addcart} from '../../../store/action/actions'
export default class Dchoose extends Component {
    // 添加一个类构造函数来初始化状态 this.state
    constructor(props) {
        super(props)
        this.state = {
            choosenum: 1,
        }
        this.decrease = this.decrease.bind(this)
        this.increase = this.increase.bind(this)
        this.addcart = this.addcart.bind(this)
    }
    render() {
        return (
            <div className="choose">
                <div className="choosepop">
                    <span className="close" onClick={this.props.togglepop}>x</span>
                    <div className="intro">
                        <div className="imgbox">
                            <img src={this.props.imgurl} alt=""/>
                        </div>
                        <div className="introtext">
                            <p className="price">{this.props.price}</p>
                            <p className="leave">库存{this.props.leave}件</p>
                            <p className="tip">请选择颜色分类</p>
                        </div>
                    </div>
                    <div className="color">
                        {
                            this.props.colors.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })
                        }
                    </div>
                    <div className="size">
                        {
                            this.props.sizes.map((item, index) => {
                                return <span key={index}>{item}</span>
                            })
                        }
                    </div>
                    <div className="num">
                        <span className="numtip">购买数量</span>
                        <div className="choosenum">
                            <span className="decrease" onClick={this.decrease}>-</span>
                            <span>{this.state.choosenum}</span>
                            <span className="increase" onClick={this.increase}>+</span>
                        </div>
                    </div>
                    <button className="surebtn" onClick={this.addcart}>确定</button>
                </div>
            </div>
        )
    }
    decrease() {
        this.setState({
            choosenum: this.state.choosenum - 1
        })
    }
    increase() {
        this.setState({
            choosenum: this.state.choosenum + 1
        })
    }
    addcart(e) {
        console.log(e)
        console.log("intro--",this.props.intro)
        console.log("price--",this.props.price)
        this.props.addcart(this.props.id, this.state.choosenum, this.props.intro, this.props.price, this.props.imgurl)
    }

}






