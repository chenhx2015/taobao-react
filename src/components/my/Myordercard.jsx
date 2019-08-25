import React from "react";

import MyOrder from "./MyOrder";
import AddCard from "./AddCard";
import "../../styles/my/myordercard.css";

const Myordercard = () => (
  <div className="Myordercard">
    {/* 我的订单 */}
    <MyOrder />
    {/* 添加卡片 */}
    <AddCard />
  </div>
);
export default Myordercard;
