import React, { useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import { IRoute } from "./Header/Header.types";
import Home from "./pages/Home";
import Mood from "./pages/Mood";

const Router: React.FC = () => {
  const routes = useMemo<IRoute[]>(
    () => [
      {
        id: "homepage-route",
        path: "/",
        Component: Home,
        exact: true,
      },
      {
        id: "timetable-route",
        path: "/timetable",
        Component: () => null,
      },
      {
        id: "hr-admin-route",
        path: "/hr-admin-moods",
        Component: Mood,
      },
    ],
    []
  );

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(({ id, path, Component, exact }) => (
          <Route path={path} key={id} exact={exact}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
