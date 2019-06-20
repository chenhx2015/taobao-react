import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index/recommendgood.css";
import { basic_url } from "../../env";
let ListItem = ({ price, num, intro, imgurl, id }) => (
  <li className="recommendgoodli">
    <Link to={"/products/" + id}>
      <div className="picdiv">
        <img src={basic_url + imgurl} alt="" />
      </div>
      <p>{intro}</p>
      <p>
        <span className="price">{price}</span>
        <span>{num}</span>
      </p>
    </Link>
  </li>
);

export default ({ list = [] }) => {
  return (
    <div>
      <p>猜你喜欢</p>
      <ul className="recommendgoodul">
        {list.map(item => (
          <ListItem
            key={item.id}
            imgurl={item.imgurl}
            intro={item.intro}
            price={item.price}
            num={item.num}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};
