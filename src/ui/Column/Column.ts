import styled, { css } from "styled-components";
import { Row } from "../Row/Row";
import { IProps } from "./Column.types";

export const Column = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  ${({ spaceBetween }: IProps) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ center }: IProps) =>
    center &&
    css`
      align-items: center;
    `}
`;
