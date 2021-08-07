import styled, { css } from "styled-components";
import {IProps} from './Dialog/Dialog.types'

export const DialogWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: none;
    opacity: 0;
    transition: opacity 1s ease-in;

    ${({ open }: IProps) => open && css`
        display: block;
        opacity: 1;
    `}
`