import jwtDecode from 'jwt-decode';
import moment from 'moment';

export const isTokenExpired = token => {
  const tokenInfo = jwtDecode(token);
  const currentTime = moment().unix();
  return currentTime >= tokenInfo.exp;
};

export const hasPermission = (token, role) => {
  const tokenInfo = jwtDecode(token);
  return role === tokenInfo.role;
}

export const isAuthenticated = (token, role) => {
  const isValidToken = !!token && !isTokenExpired(token);
  if (!isValidToken) {
    return false;
  }

  if (role && !hasPermission(token, role)) {
    return false;
  }

  return true;
};

export const getRole = (token) => {
  if (!token) {
    // return ROLES.USER;
  }
  const tokenInfo = jwtDecode(token);
  return tokenInfo.role;
};
