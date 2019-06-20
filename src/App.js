import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Index from "./route/Index";
import Weitao from "./route/Weitao";
import ShoppingCart from "./route/ShoppingCart";
import My from "./route/My";
import ProductsRoute from "./route/products";

// import './service/rem'
import "./styles/index/index.css";
import { basic_url } from "./env";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router basename={basic_url}>
        <div className="App">
          <Switch>
            <Route path="/weitao" component={Weitao} />
            <Route path="/shoppingCart" component={ShoppingCart} />
            <Route path="/my" component={My} />
            <Route path="/products" component={ProductsRoute} />
            {/* 首页 */}
            <Route path="/" component={Index} />
          </Switch>

          <Route
            render={({ match, location }) => {
              return ["/weitao", "/shoppingCart", "/my", "/"].includes(
                location.pathname
              ) ? (
                <div className="navTab">
                  <li>
                    <Link to="/">
                      <div />
                      首页
                    </Link>
                  </li>
                  <li>
                    <Link to="/weitao">
                      <div />
                      微淘
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoppingCart">
                      <div />
                      购物车
                    </Link>
                  </li>
                  <li>
                    <Link to="/my">
                      <div />
                      我的淘宝
                    </Link>
                  </li>
                </div>
              ) : null;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
