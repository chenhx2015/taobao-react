import React, { Component } from "react";
import { Link } from "react-router-dom";

const Tab = item => (
  <li>
    <Link to="/detailOrder">
      <div></div>
      {item.name}
    </Link>
  </li>
);

const MyOrder = () => {
  const tabBtn = [
    { id: 1, name: "待付款" },
    { id: 2, name: "待发货" },
    { id: 3, name: "待收货" },
    { id: 4, name: "待评价" },
    { id: 5, name: "退款/售后" }
  ];
  return (
    <div className="myorder">
      <div className="order-title">
        <strong>我的订单</strong>
        <p className="more">
          <Link to="/my/allorder">查看更多订单</Link>
        </p>
      </div>
      <ul className="tab">
        {tabBtn.map(item => (
          <Tab key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default MyOrder;
