import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, getRole } from 'utils/auth';
import { ROUTES } from 'constants/common';

export const PublicRoute = ({
    token,
    component: Component,
    ...rest
}) => {
    if (!token) {
        return (
            <Route
                {...rest}
                component={props => <Component {...props} />}
            />
        );
    }
    const roleToken = getRole(token);
    const isAuth = isAuthenticated(token, roleToken);
    if (isAuth) {
        return <Redirect to={`${ROUTES[roleToken.toUpperCase()]}`} />;
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

export default connect(mapStateToProps)(PublicRoute);
