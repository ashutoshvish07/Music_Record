import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./action.type";

const initState = {
  isAuth: false,
  token: '',
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
    //console.log("first",payload)
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:

      return {
        ...state,
        isLoading: false,
        isAuth:true,
        isError:false,
        token:payload
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError:true
      };
      default :return state
  }
};
