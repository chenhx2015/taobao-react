import React, {Component} from 'react'
import '../../styles/shoppingcart.css'
import '../../styles//my/makeorder.css'

export default class MakeOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: this.props.location.state.qty,
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.submit = this.submit.bind(this)
    }
    render() {
        let info = this.props.location.state
        let totalMoney = parseInt(this.state.qty) * parseInt(this.props.location.state.price)
        return (
            <div className="makeorder-page">
                <div className="buyer-info right-arrow">
                    <p>
                        <span>收货人：橙花香</span>
                        <span className="number">18518888888</span>
                    </p>
                    <p>收货地址：上海市徐汇区</p>
                    <p className="primary-color">收获不便时，可选择免费代收货服务</p>
                </div>
                <div className="intro">
                    <div className="imgbox">
                        <img src={info.imgurl} alt=""/>
                    </div>
                    <div className="introtext">
                        <p className="intro">{info.intro}</p>
                        <p className="price">¥{info.price}</p>
                    </div>
                    <div className="num">
                        <div className="choosenum">
                            <span className="decrease" onClick={() => this.decrease()}>-</span>
                            <span>{this.state.qty}</span>
                            <span className="increase" onClick={() => this.increase()}>+</span>
                        </div>
                    </div>
                </div>
                <div className="makesure-info">
                    <div className="right-arrow">
                        <p>淘宝服务</p>
                        <p>商品支持无忧退货</p>
                    </div>
                    <div className="right-arrow">
                        <p>店铺优惠</p>
                        <p>满就送</p>
                    </div>
                    <div className="right-arrow">
                        <p>配送方式</p>
                        <p>快递免邮</p>
                    </div>
                    <div className="right-arrow">
                        <p>运费险</p>
                        <p>卖家送，确认收货前退货可赔</p>
                    </div>
                    <div>
                        <p>共1件商品 小计：<span className="primary-color">¥ {totalMoney}</span> </p>
                    </div>
                </div>
                <div className="makesure-footer">
                    <div>合计：<span className="primary-color">¥ {totalMoney}</span></div>
                    <div onClick={this.submit}>提交订单</div>
                </div>
            </div>
        )
    }
    submit() {
        let info = this.props.location.state
        this.props.submit(info.id, info.imgurl, info.price, info.intro, this.state.qty)
        this.props.history.push('/my/allorder')
    }
    decrease () {
        this.setState({
            qty: Math.min(1, this.state.qty)
        })
    }
    increase() {
        this.setState({
            qty: this.state.qty + 1
        })
    }
}
