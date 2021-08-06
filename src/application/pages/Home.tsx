import React from "react";
import { Row } from "../../ui/Row";
import { LeftColumn } from "../../ui/LeftColumn";
import { RightColumn } from "../../ui/RightColumn";
import { Card } from "../../ui/ Card/Card";
import { Image } from "../../ui/Image";
import Skeleton from "react-loading-skeleton";
import TimelogImage from "../../assets/images/timelog.png";

const Home: React.FC = () => {
  return (
    <Row>
      <LeftColumn>
        <Card>Test</Card>
        <Card noPadding>
          <Image src={TimelogImage} />
        </Card>
      </LeftColumn>
      <RightColumn>
        <Card>
          <Skeleton count={10} />
        </Card>
        <Card>
          <Skeleton count={10} />
        </Card>
      </RightColumn>
    </Row>
  );
};

export default Home;
