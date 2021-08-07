import styled from "styled-components";
import closeIcon from '../assets/images/close.png';

export const CloseButton = styled.a`
    display: block;
    height: 30px;
    color: #8a9a9a;
    float: right;
    margin-top: 17px;
    margin-right: 15px;
    line-height: 30px;
    padding-left: 10px;
    padding-right: 32px;
    background: url(${closeIcon}) right 1px no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
`