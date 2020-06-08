import authApi from '../../services/authApi';

const NS = '@login';
export const actionTypes = {
  LOGIN_REQUEST: `${NS}/LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${NS}/LOGIN_SUCCESS`,
  REGISTER_REQUEST: `${NS}/REGISTER_REQUEST`,
  REGISTER_SUCCESS: `${NS}/REGISTER_SUCCESS`,
  REGISTER_FAILED: `${NS}/REGISTER_FAILED`,
  LOGIN_FAILURE: `${NS}/LOGIN_FAILURE`,
  ACTIVATE_REQUEST: `${NS}/ACTIVATE_REQUEST`,
  ACTIVATE_SUCCESS: `${NS}/ACTIVATE_SUCCESS`,
  ACTIVATE_FAILED: `${NS}/ACTIVATE_FAILED`,
  LOGOUT: `${NS}/LOGOUT`,
};

const action = (type, payload) => ({ type, payload });
const actions = {
  register: ({ username, password, email }, history) => {
    return dispatch => {
      dispatch(action(actionTypes.REGISTER_REQUEST))
      return authApi.register(username, password, email)
          .then((error, result) => {
            dispatch(action(actionTypes.REGISTER_SUCCESS, result));
            history.push(`/login`);
            return result;
          })
          .catch((error) => {
            dispatch(action(actionTypes.REGISTER_FAILED, error));
          });
    }
  },
  activate: ({ token }, history) => {
    console.log("-----> call activate", token)
    return dispatch => {
      dispatch(action(actionTypes.ACTIVATE_REQUEST))
      return authApi.activate(token)
          .then((result) => {
            console.log("-----> resut success", result)
            dispatch(action(actionTypes.ACTIVATE_SUCCESS, result));
            return result;
          })
          .catch((error) => {
            console.log("-----> resut error", error)
            dispatch(action(actionTypes.ACTIVATE_FAILED, error));
          });
    }
  },
  login: ({ username, password, role }, history) => {
    return dispatch => {
      dispatch(action(actionTypes.LOGIN_REQUEST))
      return authApi.login(username, password)
          .then(result => {
            console.log("---> result ", result)
            dispatch(action(actionTypes.LOGIN_SUCCESS, result));
            history.push(`dashboard`);
            return result;
          })
          .catch(error => {
            console.log("errror,", error)
            dispatch(action(actionTypes.LOGIN_FAILURE, error));
          });

    };
  },
  logout: () => {
    return action(actionTypes.LOGOUT);
  },
};

export default actions;
