import { Column } from "../Column/Column";
import { Span } from "../Span/Span";
import { Bar } from "./Graph.styles";
import React from "react";

interface IProps {
  value: number;
  label: string;
  max: number;
}

export const BarComponent = ({ value, label, max }: IProps) => {
  const maxHeight = 150;

  return (
    <Column center end>
      <Span color="#80a0a9">{value}</Span>
      <Bar height={(value / max) * maxHeight} />
      <Span color="#80a0a9">{label}</Span>
    </Column>
  );
};
