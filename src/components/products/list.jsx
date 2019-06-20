import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { basic_url } from "../../env";

let ListItem = ({ price, num, intro, imgurl, id }) => (
  <li className="">
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

const List = ({ list = [] }) => {
  return (
    <div>
      <ul className="">
        {list.map(item => (
          <ListItem
            key={item.id}
            imgurl={item.imgurl}
            intro={item.intro}
            price={item.price}
            num={item.num}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
      <span>分页1，2，3</span>
    </div>
  );
};

export default class ListClass extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    return <List {...this.props} />;
  }
}
