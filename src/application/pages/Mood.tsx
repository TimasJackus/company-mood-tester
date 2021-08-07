import React, { useState } from "react";
import { Row } from "../../ui/Row/Row";
import { LeftColumn } from "../../ui/LeftColumn";
import { RightColumn } from "../../ui/RightColumn";
import { Card } from "../../ui/Card/Card";
import { H3 } from "../../ui/H3";
import { Span } from "../../ui/Span/Span";
import { Column } from "../../ui/Column/Column";
import Skeleton from "react-loading-skeleton";
import { Graph } from "../../ui/Graph/Graph";
import { moodData } from "./MoodData";
import Select from "react-select";

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "civitta_lt",
    label: "Civitta LT",
  },
  {
    value: "civitta_lv",
    label: "Civitta LV",
  },
  {
    value: "civitta_ee",
    label: "Civitta EE",
  },
  {
    value: "mediapark_lt",
    label: "Mediapark LT",
  },
  {
    value: "mediapark_lv",
    label: "Mediapark LV",
  },
];

const Mood: React.FC = () => {
  const [selected, setSelected] = useState<any>(options[0]);
  return (
    <>
      <Row>
        <Card>
          <div style={{ width: 250 }}>
            <Select
              options={options}
              value={selected}
              onChange={(value) => setSelected(value)}
            />
          </div>
        </Card>
      </Row>
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
                  {moodData()[selected.value].average}
                </Span>
                {moodData()[selected.value].questionsData.map(
                  (question: any) => (
                    <Row key={question.label} mt={8}>
                      <Span color="#80a0a9" size={14}>
                        {question.label}{" "}
                        <Span
                          weight={700}
                          size={14}
                          color={question.value <= 2.5 ? "#ff8000" : "#8ac500"}
                        >
                          {question.value}
                        </Span>
                      </Span>
                    </Row>
                  )
                )}
              </Column>
              <Column>
                <Graph
                  vertical={true}
                  data={moodData()[selected.value].monthData}
                />
              </Column>
            </Row>
          </Card>
          <Card>
            <Row>
              {moodData()[selected.value].companyData && (
                <Column>
                  <H3>Company</H3>
                  <Graph data={moodData()[selected.value].companyData} />
                </Column>
              )}
              <Column>
                <H3>Stream / Team</H3>
                <Graph data={moodData()[selected.value].streamData} />
              </Column>
            </Row>
            <Row mt={20}>
              <Column>
                <H3>Position</H3>
                <Graph data={moodData()[selected.value].position} />
              </Column>
            </Row>
          </Card>
        </LeftColumn>
      </Row>
    </>
  );
};

export default Mood;
