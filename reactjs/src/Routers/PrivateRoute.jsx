import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route { ...rest } 
            component={ ( props ) => (
                ( isAuthenticated )
                ? <Component { ...props } />
                : <Redirect to="/auth/login" />
            )}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};