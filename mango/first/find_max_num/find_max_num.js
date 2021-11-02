const input = [3, 5, 6, 1, 2, 4];
const findMaxNum1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        break;
      }
      if (j == array.length - 1) {
        return array[i];
      }
    }
  }
};

const result1 = findMaxNum1(input);

const findMaxNum2 = (array) => {
  let maxNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
};
const result2 = findMaxNum2(input);

console.log("result1:", result1, "result2:", result2);
