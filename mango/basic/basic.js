// 세 수 중 최솟값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.

// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.

// ▣ 입력예제  6 5 11
// ▣ 출력예제  5

function solution1(num1, num2, num3) {
  let minNum =
    num1 > num2 ? (num2 > num3 ? num3 : num2) : num1 > num3 ? num3 : num1;
  return minNum;
}

const test1 = solution1(7, 5, 10);
console.log(test1);

// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.

// ▣ 입력예제 1
//  6 7 11
// ▣ 출력예제 1
//  YES

// ▣ 입력예제 2
//   13 33 17
// ▣ 출력예제 2
//   NO

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
