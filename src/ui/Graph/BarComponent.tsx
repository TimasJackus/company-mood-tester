import { Column } from "../Column/Column";
import { Span } from "../Span/Span";
import { Bar } from "./Graph.styles";
import React from "react";
import { Row } from "../Row/Row";

interface IProps {
  value: number;
  label: string;
  max: number;
  vertical?: boolean;
}

export const BarComponent = ({ value, label, max, vertical }: IProps) => {
  const maxHeight = 150;

  const Container = vertical ? Column : Row;

  return (
    <Container center end reverse={!vertical}>
      <Span color="#80a0a9">{value}</Span>
      <Bar height={(value / max) * maxHeight} vertical={vertical} />
      <Span color="#80a0a9" width={!vertical ? 120 : undefined}>
        {label}
      </Span>
    </Container>
  );
};
