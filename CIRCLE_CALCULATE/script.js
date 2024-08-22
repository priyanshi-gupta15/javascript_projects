const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.floor(Math.PI * radius * radius);
};
const circumfarance = function (radius) {
  return Math.ceil(2 * Math.PI * radius);
};
const diametre = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, diametre));
console.log(calculate(radius, circumfarance));
