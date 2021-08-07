import styled, { css } from "styled-components";
import { IProps } from "./Dialog.types";


export const Dialog = styled.div`
    transition: opacity 0.3s ease-in;
    position: absolute;
    width: 470px;
    background: #fff;
    z-index: 102;
    display: block;
    top: 100px;
    display: none;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ open }: IProps) => open && css`
        display: block;
        opacity: 1;
    `}
`
