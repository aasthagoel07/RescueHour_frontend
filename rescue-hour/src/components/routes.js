import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import NotFound from "./notFound";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route>
        <NotFound />
        </Route>
    </Switch>
  );
}