import React from "react";
import { Row } from "../../ui/Row/Row";
import { LeftColumn } from "../../ui/LeftColumn";
import { RightColumn } from "../../ui/RightColumn";
import { Card } from "../../ui/Card/Card";
import { Image } from "../../ui/Image";
import Survey from "../../domain/Survey/Survey";
import Skeleton from "react-loading-skeleton";
import TimelogImage from "../../assets/images/timelog.png";
import SubHeader from "../../assets/images/subheader.png";

const Result: React.FC = () => {
  return (
    <>
      <img src={SubHeader} alt="subheader" height="70px" width="997px" />
      <Row style={{ paddingTop: 18 }} spaceBetween>
        <RightColumn>
          <Card>
            <Skeleton count={10} />
          </Card>
          <Card>
            <Skeleton count={10} />
          </Card>
        </RightColumn>
        <LeftColumn>
          <Card>
            <Skeleton count={10} />
          </Card>
          <Card>
            <Skeleton count={10} />
          </Card>
        </LeftColumn>
      </Row>
    </>
  );
};

export default Result;
