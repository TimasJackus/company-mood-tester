import React from "react";
import { Row } from "../Row/Row";
import { BarComponent } from "./BarComponent";
import { getRandomNum } from "../../utils/getRandomNum";

interface IProps {
  vertical?: boolean;
  data: any[];
}

export const Graph = ({ vertical, data }: IProps) => {
  const maxValue = 5;
  return (
    <Row wrap={!vertical}>
      {data.map((item) => (
        <BarComponent
          key={item.label}
          value={Number(item.value)}
          max={maxValue}
          label={item.label}
          vertical={vertical}
        />
      ))}
    </Row>
  );
};
