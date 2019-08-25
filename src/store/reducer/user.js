import { SIGN_UP, SIGN_OUT_OPT } from "../action/actions";
export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, access_token: action.payload };
      break;
    case SIGN_OUT_OPT:
      return { ...state, access_token: false };
      break;
    default:
      return state;
      break;
  }
};
