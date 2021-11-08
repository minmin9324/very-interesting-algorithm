// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(nums) {
    let anwser = 0;
    anwser = Math.min(...nums)
    return anwser
  }
  
  const test = solution([5, 3, 7, 11, 2, 15, 17])
  console.log (test)