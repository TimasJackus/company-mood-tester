import React from "react";
import { Card } from "../../ui/Card/Card";
import { Row } from "../../ui/Row";
import { Divider } from "../../ui/Divider";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

const Survey: React.FC = () => {
  return (
    <Card center spaceBetween>
      <Row>
        How was your day?
        <Rating
          emptySymbol={<AiOutlineStar size={24} color="#ffc000" />}
          fullSymbol={<AiFillStar size={24} color="#ffc000" />}
        />
      </Row>
      <Divider />
      <Row>Streak: 1 (Record: 1)</Row>
    </Card>
  );
};

export default Survey;
