import styled, { css } from "styled-components";
import { IProps } from "./Card.types";

export const Card = styled.div`
  background: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;

  ${({ noPadding }: IProps) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;
