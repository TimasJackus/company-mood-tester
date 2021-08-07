import styled from "styled-components";
import { IProps } from "./Graph.types";

export const Bar = styled.div`
  border-radius: 2px;
  background: linear-gradient(0deg, #e3edee, #c7dbde);
  width: ${({ height, vertical }: IProps) => (vertical ? 20 : height || 0)}px;
  height: ${({ height, vertical }: IProps) => (vertical ? height : 20 || 0)}px;
  margin: 5px;
`;
