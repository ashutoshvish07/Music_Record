import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./action.type";

export const login = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  }).then((r) => {
   // console.log(r)
    return dispatch({ type: USER_LOGIN_SUCCESS, payload: r.data.token });
  }).catch(()=>{
    dispatch({type:USER_LOGIN_FAILURE})
  })
};
