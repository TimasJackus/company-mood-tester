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

  ${({ end }: IProps) =>
    end &&
    css`
      justify-content: flex-end;
    `}

  ${({ wrap }: IProps) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}
  ${({ reverse }: IProps) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;
