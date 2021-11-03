function solution1(num1, num2, num3) {
  let minNum =
    num1 > num2 ? (num2 > num3 ? num3 : num2) : num1 > num3 ? num3 : num1;
  return minNum;
}

const test1 = solution1(7, 5, 10);
console.log(test1);

function solution2(num1, num2, num3) {
  let minmax =
    num1 < num2
      ? num2 < num3
        ? num3 - (num1 + num2) < 0
        : num2 - (num1 + num3) < 0
      : num1 < num3
      ? num3 - (num1 + num2) < 0
      : num1 - (num2 + num3) < 0;
  return minmax ? "YES" : "NO";
}

const test2 = solution2(13, 33, 17);
console.log(test2);
