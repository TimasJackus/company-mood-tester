import React from "react";
import { Card } from "../../ui/ Card/Card";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/all";

const Survey: React.FC = () => {
  return (
    <Card center spaceBetween>
      How was your day?
      <Rating
        emptySymbol={<AiOutlineStar size={24} color="#ffc000" />}
        fullSymbol={<AiFillStar size={24} color="#ffc000" />}
      />
    </Card>
  );
};

export default Survey;
