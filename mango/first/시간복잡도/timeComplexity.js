// 0 혹인 양의 정수로만 이루어진 배열이 있을 때 왼쪽에서 오른쪽으로 하나씩 모든 숫자를 사이에 'x'
// 또는 '+'연산자를 넣어 결과가 가장 큰 수? ('+'보다 'x'를 먼저 계산하지 않고 , 모든 연산은 왼쪽에서부터)

const input = [0, 3, 5, 6, 1, 2, 4];

const findMaxPlusOrMultiply = (array) => {
  let currentValue = 0;
  for (let num of array) {
    if (currentValue <= 0 || num <= 1) {
      currentValue += num;
      continue;
    }
    currentValue *= num;
  }
  return currentValue;
};

result = findMaxPlusOrMultiply(input);
console.log(result);

// 시간 복잡도 O(N)

// 영어로 된 문자열이 있을때 반복되지않는 첫번재 문자를 반환.
// 만약그런 문자가없으면 '_'를 반환,
// "abadabac" 반복되지않는 문자 :d, c 이면 첫번째 문자인 d를 반환하면 o

const input2 = "abadabac";
