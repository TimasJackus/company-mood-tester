import styled from "styled-components";

export const TableHeadCell = styled.th`
    background: #d9e7ec;
    border-top: 1px solid #b9d0d9;
    border-left: 1px solid #b9d0d9;
    border-bottom: 1px solid #b9d0d9;
    margin-bottom: -1px;
    font-weight: 700;
    color: #4f686e;
    z-index: 4;
    float: left;
    width: 26px;
    height: 31px;
    line-height: 28px;
    overflow: hidden;
    text-align: center;
    position: relative;
    font-size: 11px;
    box-sizing: border-box;
    &:first-child: {
        border-left: 0;
    }
`