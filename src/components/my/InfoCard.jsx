import React from "react";
import { Link } from "react-router-dom";
import { basic_url } from "../../env";
// 顶部信息
const InfoCard = ({ history }) => {
  console.log("history", history);
  return (
    <div className="infocard">
      <div className="infocardbox">
        <div className="img">
          <img src={basic_url + "/images/index/icon-delifood-1.png"} alt="" />
        </div>
        <div className="info">
          <p className="num">tb376078529</p>
          <span className="account">我的亲情账号</span>
        </div>
        <span className="setting">
          {/* <Link to="/my/setting">设置</Link> */}
          <span
            onClick={() => {
              history.push("/my/setting");
            }}
          >
            设置
          </span>
        </span>
        <div className="tab">
          <ul>
            <li>
              <Link to="/">
                <p>28</p>
                <p>收藏夹</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>26</p>
                <p>关注店铺</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>465</p>
                <p>足迹</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>13</p>
                <p>红包卡券</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
