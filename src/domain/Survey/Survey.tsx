import React, { useState } from "react";
import { Card } from "../../ui/Card/Card";
import { Row } from "../../ui/Row/Row";
import { Column } from "../../ui/Column/Column";
import { Span } from "../../ui/Span/Span";
import { Divider } from "../../ui/Divider";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineFrown,
  AiOutlineMeh,
  AiOutlineSmile,
  AiOutlineStar,
} from "react-icons/all";

const Survey: React.FC = () => {
  const [rating, setRating] = useState<Number | null>(null);
  const averageRating = 2;

  const onChange = (rate: Number) => {
    setRating(rate);
  };

  const getColorByRating = () => {
    if (averageRating < 1.5) {
      return "#ff8000";
    }
    if (averageRating < 3.5) {
      return "#80a0a9";
    }
    return "#8ac500";
  };

  const FaceIcon = (() => {
    if (averageRating < 1.5) {
      return AiOutlineFrown;
    }
    if (averageRating < 3.5) {
      return AiOutlineMeh;
    }
    return AiOutlineSmile;
  })();

  return (
    <Card center spaceBetween>
      {rating ? (
        <>
          <Column center>
            <Span size={24}>
              Company Mood <Span weight={700}>Today</Span>
            </Span>
            <Row centerH center mt={10}>
              <FaceIcon size={48} color={getColorByRating()} />{" "}
              <Span color={getColorByRating()} size={24} weight={500} ml={10}>
                {averageRating}
              </Span>
            </Row>
          </Column>
          <Divider />
        </>
      ) : (
        <>
          <Row spaceBetween center>
            <Span size={16} weight={700}>
              How was your day?
            </Span>
            <Rating
              onChange={onChange}
              emptySymbol={<AiOutlineStar size={28} color="#ffc000" />}
              fullSymbol={<AiFillStar size={28} color="#ffc000" />}
            />
          </Row>
          <Divider />
        </>
      )}
      <Row>
        <Span color="#80a0a9">
          Mood test streak: <Span weight={700}>1</Span> <br />
          Personal record: <Span weight={700}>3</Span>
        </Span>
      </Row>
    </Card>
  );
};

export default Survey;
