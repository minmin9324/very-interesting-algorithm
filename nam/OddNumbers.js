// 홀수
// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

function solution(nums) {
    let sum = 0;
    let odd = [];
    let anwser = [];
    
    for(let i = 0; i < nums.length; i++) {
      if(nums[i]%2){
        sum += nums[i]
        odd.push(nums[i])
      }
    }
    anwser.push(sum)
    anwser.push(Math.min(...odd))
    return anwser
  }
  
  const test = solution([12, 77, 38, 41, 53, 92, 85])
  console.log (test)