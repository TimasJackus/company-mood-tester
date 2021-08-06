import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(RouterNavLink)`
    display: flex;
    line-height: 33px;
    background: #477484;
    padding: 0 14px;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    min-height: 33px;
    justify-content: center;
    align-items: center;
    &.active {
        background: #fff;
        color: #477484;
        &:hover {
            background: #fff;
            color: #477484;
        }
    }
    &:hover {
        background: #fff;
        color: #000;
    }
`