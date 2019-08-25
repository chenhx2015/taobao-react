import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { makeallorder, signUp, signOutOpt } from "../store/action/actions";
import MakerOrder from "../components/my/MakeOrder";
import MyContainer from "../components/my/MyContainer";
import AllOrder from "../components/my/Allorder";
import Setting from "../components/user/Setting";
import { push } from "connected-react-router";
// 请求接口
import fetch from "cross-fetch";

import "../styles/my/index.css";

// 注册函数，请求后端接口数据，dispatch 的是这个 function
const signUpAjax = (username, password) => {
  return dispatch => {
    return fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(signUp(res.data.access_token));
        dispatch(push("/my"));
      });
  };
};

const mapStateToProps = state => ({
  allorder: state.allorder,
  user: state.user
});
const mapDispatchToProps = {
  makeallorder: makeallorder,
  signUp: signUpAjax,
  signOut: signOutOpt
};

const MakeOrdercontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakerOrder);

const AllOrderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllOrder);

const SettingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);

export default ({ location, match, user }) => (
  <Switch>
    <Route path={match.path + "/allorder"} component={AllOrderContainer} />
    <Route path={match.path + "/makeOrder"} component={MakeOrdercontainer} />
    <Route path={match.path + "/setting"} component={SettingContainer} />
    <Route path={match.path} component={MyContainer} />
  </Switch>
);
