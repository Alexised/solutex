import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateLot from "./pages/CreateLot";
import Recovery from "./pages/RecoveryPassword";
import Change from "./pages/ChangePassword";


import "./App.css";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/createLot" exact component={CreateLot} />
      <Route path="/recovery" exact component={Recovery} />
      <Route path="/change" exact component={Change} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
