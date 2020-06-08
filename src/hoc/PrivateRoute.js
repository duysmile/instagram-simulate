import React from 'react';
import {connect} from 'react-redux';

import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, getRole } from 'utils/auth';
import { ROUTES } from 'constants/common';

export const PrivateRoute = ({
    role,
    token,
    component: Component,
    ...rest
}) => {
    if (!token) {
        return <Redirect to={`/`} />;
    }
    const isAuth = isAuthenticated(token, role);
    if (!isAuth) {
        localStorage.setItem('state', "{}");
        const roleInToken = getRole(token);
        return <Redirect to={`${ROUTES[roleInToken.toUpperCase()]}/login`} />;
    }
    return (
        <Route
            {...rest}
            component={props => <Component {...props} />}
        />
    );
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
