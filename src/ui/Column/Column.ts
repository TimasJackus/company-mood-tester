import styled, { css } from "styled-components";
import { Row } from "../Row/Row";
import { IProps } from "./Column.types";

export const Column = styled(Row)`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${({ end }: IProps) =>
    end &&
    css`
      justify-content: flex-end;
    `}

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
  ${({ reverse }: IProps) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;
