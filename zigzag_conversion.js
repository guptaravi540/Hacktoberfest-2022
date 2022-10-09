//https://leetcode.com/problems/zigzag-conversion/submissions/

var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;

  const strArr = [];
  for (let i = 0; i < numRows; i++) {
    strArr.push("");
  }

  let index = 0;
  let isIncremental = true;
  for (const character of s) {
    strArr[index] += character;

    if (index === numRows - 1) {
      isIncremental = false;
    } else if (index === 0) {
      isIncremental = true;
    }
    if (isIncremental) {
      index++;
    } else {
      index--;
    }
  }

  return strArr.join("");
};
