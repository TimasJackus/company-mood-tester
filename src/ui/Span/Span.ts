import styled from "styled-components";
import { IProps } from "./Span.types";

export const Span = styled.span`
  font-size: ${({ size }: IProps) => (size ? `${size}px` : "inherit")};
  color: ${({ color }: IProps) => color || "inherit"};
  font-weight: ${({ weight }: IProps) => weight || "inherit"};
  margin-left: ${({ ml }: IProps) => ml || 0}px;
  margin-top: ${({ mt }: IProps) => mt || 0}px;
  maxWidth: ${({ maxWidth }: IProps) => `${maxWidth}px` || "auto"};
`;
