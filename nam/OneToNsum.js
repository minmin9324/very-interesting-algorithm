// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

function solution(n) {
    let anwser = 0;
    for(let i = 1; i <= n; i++) {
      anwser += i
    }
    return anwser
  }
  
  const test =solution(6)
  console.log (test)