def solution(s):
  n = len(s)
  result = []
  answer = 0
  # 문자열 길이 1부터 n까지 모두 확인 i
  for i in range(1, n+1):
    # 문자열 확인 시작 위치 j("abac"에 i=2 -> ab, ba, ac 확인하려면 인덱스 3까지)
    for j in range(n-i+1):
      # Set 자바스크립트 안되니까 그냥 배열에 넣고 중복확인
      repeated=False
      # 좋은 문자열 확인하려고 정렬한 후 같은 문자 나오는지 확인
      a = sorted(list(s[j:j+i]))
      for k in range(i-1):
        if a[k]==a[k+1]:
          # 같은 문자 나오면 For문 취소
          repeated = True
          break
      # 좋은 문자열이고 아직 추가되지 않은(여러번 나타나는 경우) 경우 추가하고 answer + 1
      if not repeated and s[j:j+i] not in result:
        result.append(s[j:j+i])
        answer += 1
  return answer
print(solution("abac"));