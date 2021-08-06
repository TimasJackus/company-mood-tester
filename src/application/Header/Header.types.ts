import React from "react";
import { NavLinkProps } from "react-router-dom";

export interface IRoute {
    id: string;
    path: string;
    Component: React.FC;
    exact?: boolean;
}

export interface ILink extends NavLinkProps {}
