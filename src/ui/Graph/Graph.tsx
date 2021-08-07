import React from "react";
import { Row } from "../Row/Row";
import { BarComponent } from "./BarComponent";

export const Graph: React.FC = () => {
  return (
    <Row>
      <BarComponent value={3.3} max={5} label="Jan" />
      <BarComponent value={4.5} max={5} label="Feb" />
      <BarComponent value={0} max={5} label="Mar" />
    </Row>
  );
};
