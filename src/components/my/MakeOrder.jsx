import React from 'react'
import '../../styles/shoppingcart.css'
import '../../styles//my/makeorder.css'

export default () => {
    const decrease = (id) => {

    }
    const increase = (id) => {
        
    }
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
                    <img src='/images/index/pic-recommend-3.png' alt=""/>
                </div>
                <div className="introtext">
                    <p className="intro">intro</p>
                    <p className="price">price</p>
                </div>
                <div className="num">
                    <div className="choosenum">
                        <span className="decrease" onClick={() => decrease()}>-</span>
                        <span>qty</span>
                        <span className="increase" onClick={() => increase()}>+</span>
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
                    <p>共1件商品 小计：<span className="primary-color">¥ 45.00</span> </p>
                </div>
            </div>
            <div className="makesure-footer">
                <div>合计：<span className="primary-color">¥ 45.00</span></div>
                <div>提交订单</div>
            </div>
        </div>
    )
}