import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Index from './container/Index'
import Discount from './container/Discount'
import Hiking from './container/Hiking'
import My from './container/My'

import './styles/index/index.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
      
          <Route path="/discount" component={Discount} />
          <Route path="/hiking" component={Hiking} />
          <Route path="/my" component={My} />
          {/* 首页 */}
          <Route path="/" component={Index} />
      </Switch>  
        
          <Route render={({match, location}) => {
          return ['/discount','/hiking','/my','/'].includes(location.pathname) ?
                (  
                <div className="navTab">
                <li>
                  <Link to="/"><div></div>首页</Link>
                </li>
                <li>
                  <Link to="/discount"><div></div>优惠</Link>
                </li>
                <li>
                  <Link to="/hiking"><div></div>足迹</Link>
                </li>
                <li>
                  <Link to="/my"><div></div>我的</Link>
                </li>
              </div>)
              : null
            }
          } ></Route>


      </div>
      
      </Router>
    );
  }
}

export default App
