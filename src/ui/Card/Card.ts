import styled, { css } from "styled-components";
import { IProps } from "./Card.types";

export const Card = styled.div`
  background: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

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

  ${({ noPadding }: IProps) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;
