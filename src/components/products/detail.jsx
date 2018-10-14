import React, { Component } from 'react'
import Dchoose from './dchoose'

import '../../styles/index/goodsdetail.css'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showpop: false,
            btnType: 'buynow'
        }
        this.choosepop = this.choosepop.bind(this)
        this.choosepop2 = this.choosepop2.bind(this)
    }
    render() {
        return (
            <div className="goodsDetailPage">
                <div className="detail-intro">
                    <div className="img"><img src={this.props.imgurl} alt=""/></div>
                    <p className="price">{this.props.price}</p>
                    <p className="intro">{this.props.intro}</p>
                    <div className="tip">
                        <span>{this.props.fee}</span>
                        <span>{this.props.buyed}</span>
                        <span>{this.props.addr}</span>
                    </div>
                </div>

                <div className="option">
                    <li className="li-arrow-right">
                        <span>规格</span>
                        <span>选择颜色分类</span>
                    </li>
                    <li className="li-arrow-right">
                        <span>参数</span>
                        <span>上市时间 大小...</span>
                    </li>
                </div>
                <div className="btn-contain">
                    <div className="buybtn">
                        <span onClick={this.choosepop}>加入购物车</span>
                        <span onClick={this.choosepop2}>立即购买</span>
                    </div>
                </div>
                {this.state.showpop ?
                // {/* 选择弹窗提示 */}
                <Dchoose addcart={this.props.addcart} makeorder={this.props.makeorder} btntype={this.state.btnType} history={this.props.history} id={this.props.id} imgurl={this.props.imgurl} intro={this.props.intro} price={this.props.price} checkstate={this.props.checkstate} leave={this.props.leave} colors={this.props.colors} sizes={this.props.sizes} togglepop={this.choosepop} /> : null
                }
            </div>
        )
    }
    choosepop() {
        this.setState({
            showpop: !this.state.showpop,
            btnType: 'addcart'
        })
    }
    choosepop2() {
        this.setState({
            showpop: !this.state.showpop,
            btnType: 'buynow'
        })
    }

}


