import React, { useMemo } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { IRoute } from './Header/Header.types'
import Home from './pages/Home'

const Router: React.FC = () => {
    const routes = useMemo<IRoute[]>(() => [
        {
            id: "homepage-route",
            path: "/",
            Component: Home,
            exact: true
        },
        {
            id: "timetable-route",
            path: "/timetable",
            Component: () => null,
        },
        {
            id: "hr-admin-route",
            path: "/hr-admin-moods",
            Component: () => null
        }
    ], [])

    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({id, path, Component, exact}) => <Route path={path} key={id} exact={exact}>
                    <Component />
                </Route>)}
            </Switch>
        </BrowserRouter>
    )
}

export default Router
