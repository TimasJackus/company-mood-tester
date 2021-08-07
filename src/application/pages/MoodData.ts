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

// How satisfied are you with the amount of working support you are currently receiving?
// How full of energy are you feeling today?
// How content are you with the work pressure you are currently experiencing?
// How valued for your work input are you currently feeling?
// How fulfilled are you with your current tasks and duties?

const questions = () => [
  {
    label: "Support",
    value: getRandomNum(1.5, 5),
  },
  {
    label: "Energy",
    value: getRandomNum(1.5, 5),
  },
  {
    label: "Stress",
    value: getRandomNum(1.5, 5),
  },
  {
    label: "Value",
    value: getRandomNum(1.5, 5),
  },
  {
    label: "Fulfillment",
    value: getRandomNum(1.5, 5),
  },
];

export const moodData: any = () => ({
  all: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    companyData: companyData(),
    position: allPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
  civitta_lt: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
  civitta_lv: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
  civitta_ee: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: civittaPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
  mediapark_lt: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: mediaparkPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
  mediapark_lv: {
    average: getRandomNum(1.5, 5),
    monthData: monthData(),
    position: mediaparkPositionData(),
    streamData: streamData(),
    questionsData: questions(),
  },
});
