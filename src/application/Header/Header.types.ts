import React from "react";

export interface IRoute {
    id: string;
    path: string;
    Component: React.FC;
    exact?: boolean;
}