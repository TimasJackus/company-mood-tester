import styled, { css } from "styled-components";
import { IProps } from "./Row.types";

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${({ mt }: IProps) => mt || 0}px;

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
  
  ${({ centerH }: IProps) =>
    centerH &&
    css`
      justify-content: center;
    `}
`;
