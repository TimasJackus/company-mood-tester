import styled, { css } from "styled-components";

interface IProps {
  full?: boolean;
}

export const LeftColumn = styled.div`
  display: flex;
  width: 630px;
  flex-wrap: wrap;

  ${({ full }: IProps) =>
    full &&
    css`
      width: 100%;
  `}
`;
