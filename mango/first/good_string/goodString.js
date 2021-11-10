// 좋은 부분 문자열이란 어떤 문자열 s의 부분 문자열이면서 같은 알파벳이 두 번 이상 나타나지 않는 문자열을 말합니다. 예를 들어 주어진 문자열이 “abac” 일 때,
// 부분 문자열 “a”, “ab”, “bac”등은 원래 문자열 “abac” 의 부분 문자열이면서 문자열 내에 같은 알파벳이 두 번 이상 나타나지 않으므로 좋은 부분 문자열입니다.
// 그러나 “aba”, “abac”는 문자열 내에 같은 알파벳 ‘a’가 두 번 이상 나타나므로 좋은 부분 문자열이 아닙니다.문자열 s가 주어질 때 좋은 부분 문자열의 개수를 return 하도록 solution 함수를 완성해주세요.
// 문자열 s의 길이는 1 이상 100 이하이며, 알파벳 소문자로만 이루어져 있습니다.
// 여러 번 나타나는 같은 부분 문자열은 하나로 세면 됩니다.
// ”abac”-> 7 "abcd”-> 10 "zxzxz”-> 4

function solution(s) {
  let result = new Set();
  let a = [];
  let repeated = false;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      repeated = false;
      a = s
        .substring(j, j + i)
        .split("")
        .sort();
      for (let k = 0; k < i - 1; k++) {
        if (a[k] == a[k + 1]) {
          repeated = true;
          break;
        }
      }
      if (!repeated) {
        result.add(s.substring(j, j + i));
      }
    }
  }
  return result.size;
}
console.log(solution("abac"));
