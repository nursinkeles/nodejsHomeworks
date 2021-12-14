const circleArea = (radius) => {
  let areaOfTheCircle = Math.PI * radius * radius;
  console.log(areaOfTheCircle);
};
const circleCircumference = (radius) => {
  let circumferenceOfTheCircle = 2 * Math.PI * radius;
  console.log(circumferenceOfTheCircle);
};
// module.exports = circleArea;
// module.exports = circleCircumference;
// export { circleArea, circleCircumference };
module.exports = {
  circleArea,
  circleCircumference,
};
