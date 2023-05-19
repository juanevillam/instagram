import React from "react";
import { Login } from "../Views/Login";
import { Register } from "../Views/Register";
import { Switch, Route, Redirect } from "react-router-dom";

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route component={ Login } exact path="/auth/login" />
                <Route component={ Register } exact path="/auth/register" />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    );
};