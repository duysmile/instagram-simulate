import { actionTypes } from './actions';

const getInitialState = () => ({
  user: null,
  isFetching: false,
  error: '',
  token: '',
});

const auth = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isRegisterSuccess: false
      };
    // case actionTypes.LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     isRegisterSuccess: false,
    //
    //     // user: {
    //     //   username: payload.username,
    //     // },
    //     // token: payload.data.token,
    //     error: '',
    //
    //   };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
        isFetching: false,
        isRegisterSuccess: false
      };
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        error: payload,
        isFetching: false,
        isRegisterSuccess: false
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: payload,
        isFetching: false,
        isRegisterSuccess: true

      };
    case actionTypes.ACTIVATE_REQUEST:
      return {
        ...state,
        error: payload,
        isFetching: false,
        status: 1
      };
    case actionTypes.ACTIVATE_FAILED:
      return {
        ...state,
        error: payload,
        isFetching: true,
      };
    case actionTypes.ACTIVATE_SUCCESS:
      return {
        ...state,
        error: payload,
        isFetching: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: '',
        isRegisterSuccess: false
      };
    default:
      return state;
  }
};

export default auth;
