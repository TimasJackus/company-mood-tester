import styled from "styled-components";
import { IProps } from "./Graph.types";

export const Bar = styled.div`
  width: 20px;
  height: 150px;
  border-radius: 2px;
  background: linear-gradient(0deg, #e3edee, #c7dbde);
  height: ${({ height }: IProps) => height || 0}px;
  margin: 5px;
`;
