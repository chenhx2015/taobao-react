export const ADD_GOODS = "ADD_GOODS";
export const ADD_HOTS = "ADD_HOTS";
export const ADD_CART = "ADD_CART";
export const CART_DECREASE = "CART_DECREASE";
export const CART_INCREASE = "CART_INCREASE";
export const ORDER_ADD = "ORDER_ADD";
export const ORDER_REMOVE = "ORDER_REMOVE";
export const ADD_FASHIONS = "ADD_FASHIONS";
export const ADD_CHEAPS = "ADD_CHEAPS";
export const ADD_GLOBALS = "ADD_GLOBALS";
export const ADD_WEITAO_DATA = "ADD_WEITAO_DATA";
export const SHOW_LOADING = "SHOW_LOADING";
export const MAKE_ALL_ORDER = "MAKE_ALL_ORDER";
// 登录注册模块
export const SIGN_UP = "SIGN_UP";
// 退出操作
export const SIGN_OUT_OPT = "SIGN_OUT_OPT";

// 以下是旧的很多个一样结构的代码，样板代码
// export const addgoods = data => {
//   return {
//     type: ADD_GOODS,
//     payload: data
//   };
// };

// 减少样板代码，优化代码
// 传入 type 及 参数名字
const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};
// 首页进来发起的 action
export const showLoading = makeActionCreator(SHOW_LOADING, "payload");
export const addgoods = makeActionCreator(ADD_GOODS, "payload");
export const addhots = makeActionCreator(ADD_HOTS, "payload");
export const addfashions = makeActionCreator(ADD_FASHIONS, "payload");
export const addcheaps = makeActionCreator(ADD_CHEAPS, "payload");
export const addglobals = makeActionCreator(ADD_GLOBALS, "payload");

export const addcart = makeActionCreator(ADD_CART, "payload");
export const cartIncrease = makeActionCreator(CART_INCREASE, "payload");
export const cartDecrease = makeActionCreator(CART_DECREASE, "payload");

export const orderAdd = makeActionCreator(ORDER_ADD, "payload");
export const orderRemove = makeActionCreator(ORDER_REMOVE, "payload");
export const addweitaodata = makeActionCreator(ADD_WEITAO_DATA, "payload");

export const makeallorder = makeActionCreator(MAKE_ALL_ORDER, "payload");
export const signUp = makeActionCreator(SIGN_UP, "payload");
export const signOutOpt = makeActionCreator(signOutOpt, "payload");
