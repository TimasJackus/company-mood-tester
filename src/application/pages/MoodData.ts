import { getRandomNum } from "../../utils/getRandomNum";

export const monthData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Jan",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Oct",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Mar",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Apr",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "May",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Jun",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Jul",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Aug",
  },
];

export const companyData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Mediapark LT",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Mediapark LV",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Civitta LT",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Civitta LV",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Civitta EE",
  },
];

export const streamData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Node.js",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "React",
  },
  {
    value: getRandomNum(1.5, 5),
    label: ".NET",
  },
];

export const allPositionData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Analyst",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Project Manager",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Partner",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Developer",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Designer",
  },
];

export const civittaPositionData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Analyst",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Project Manager",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Partner",
  },
];

export const mediaparkPositionData = () => [
  {
    value: getRandomNum(1.5, 5),
    label: "Developer",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Project Manager",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Partner",
  },
  {
    value: getRandomNum(1.5, 5),
    label: "Designer",
  },
];

export const moodData: any = () => ({
  all: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    companyData: companyData(),
    position: allPositionData(),
    streamData: streamData(),
  },
  civitta_lt: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
  },
  civitta_lv: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
  },
  civitta_ee: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
  },
  mediapark_lt: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: mediaparkPositionData(),
    streamData: streamData(),
  },
  mediapark_lv: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: mediaparkPositionData(),
    streamData: streamData(),
  },
});
