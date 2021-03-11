import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "../HOC/PrivateRoute";

// Pages
import Home from "../Page/Home";
import Login from "../Page/Login";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
