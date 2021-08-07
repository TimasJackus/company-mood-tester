import styled from "styled-components";

export const TableHeadTitleCell = styled.th`
    background: #d9e7ec;
    border-top: 1px solid #b9d0d9;
    border-bottom: 1px solid #b9d0d9;
    font-weight: 700;
    color: #4f686e;
    z-index: 4;
    float: left;
    height: 31px;
    line-height: 28px;
    text-align: center;
    position: relative;
    font-size: 11px;
    box-sizing: border-box;
    width: 110px;
    overflow: visible;
    padding-left: 5px;
    text-align: left;
    &:last-child {
        border-left: 1px solid #b9d0d9;
    }
`