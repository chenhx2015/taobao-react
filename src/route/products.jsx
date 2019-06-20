import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../styles/index/index.css";
import fetch from "cross-fetch";
import { addgoods, addcart } from "../store/action/actions";
import { connect } from "react-redux";

import List from "../components/products/list";
import Detail from "../components/products/detail";
import { basic_url } from "../env";

const fetchData = (dispatch, getState) => {
  return fetch(basic_url + "/mockData/goods.json", {})
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch(addgoods(res));
    });
};

const mapStateToProps = state => ({
  list: state.goods
});

const mapDispatchToProps = (dispatch, state) => ({
  fetchList: () => dispatch(fetchData),
  addcart: (id, qty, intro, price, imgurl) => {
    dispatch(addcart({ id, qty, intro, price, imgurl }));
  }
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

const RouteAbleDetail = ({ match, list, ...rest }) => {
  let id = match.params.id;
  let goods = list.find(value => id == value.id);
  return <Detail id={id} {...rest} {...goods} />;
};
const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteAbleDetail);

export default ({ location, match }) => (
  <Switch>
    <Route path={match.path + "/:id"} component={DetailContainer} />
    <Route path={match.path} component={ListContainer} />
  </Switch>
);
