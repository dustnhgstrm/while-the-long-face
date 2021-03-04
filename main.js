function numberDoubler(num) {
  let newNum = num;
  while (newNum <= 100) {
    newNum = newNum * 2;
  }
  return newNum;
}

function stringRepeater(str) {
  let ourStr = str;
  while (ourStr.length < 10) {
    ourStr = ourStr + str;
  }
  return ourStr;
}

function makeDivisible(x, y) {
  let ourX = x;
  while (ourX % y !== 0) {
    ourX++;
  }
  return ourX;
}

module.exports = {
  numberDoubler,
  stringRepeater,
  makeDivisible,
};
