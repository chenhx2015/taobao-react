import React, { Component } from "react";
import Infocard from "./InfoCard";
import Member from "./Member";
import Myordercard from "./Myordercard";

export default class MyContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="myindex">
        <Infocard history={this.props.history} />
        <Member />
        <Myordercard />
      </div>
    );
  }
}
