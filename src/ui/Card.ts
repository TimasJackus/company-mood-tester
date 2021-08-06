import styled, { css } from "styled-components";

export const Card = styled.div`
  background: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;
