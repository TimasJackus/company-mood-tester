import React from "react";
import { Row } from "../../ui/Row/Row";
import { LeftColumn } from "../../ui/LeftColumn";
import { RightColumn } from "../../ui/RightColumn";
import { Card } from "../../ui/Card/Card";
import { H3 } from "../../ui/H3";
import { Span } from "../../ui/Span/Span";
import { Column } from "../../ui/Column/Column";
import Skeleton from "react-loading-skeleton";
import SubHeader from "../../assets/images/subheader.png";
import { Graph } from "../../ui/Graph/Graph";

const Mood: React.FC = () => {
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
            <Row>
              <Column>
                <H3>Overall mood</H3>
                <Span size={48} weight={700}>
                  3.4
                </Span>
              </Column>
              <Column>
                <Graph />
              </Column>
            </Row>
          </Card>
          <Card>
            <Skeleton count={10} />
          </Card>
        </LeftColumn>
      </Row>
    </>
  );
};

export default Mood;
