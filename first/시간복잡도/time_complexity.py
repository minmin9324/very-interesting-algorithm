# 0 혹인 양의 정수로만 이루어진 배열이 있을 때 왼쪽에서 오른쪽으로 하나씩 모든 숫자를 사이에 'x'
# 또는 '+'연산자를 넣어 결과가 가장 큰 수? ('+'보다 'x'를 먼저 계산하지 않고 , 모든 연산은 왼쪽에서부터)

input1 = [0, 3, 5, 6, 1, 2, 4]

def find_max_plus_or_multiply(array):
    current_value=0
    for num in array:
        if current_value<=0 or num<=1:
            current_value+=num
            continue
        current_value*=num
    return current_value


result = find_max_plus_or_multiply(input1) 
print(result)

# 시간 복잡도 O(N)




# 영어로 된 문자열이 있을때 반복되지않는 첫번재 문자를 반환.
# 만약그런 문자가없으면 '_'를 반환, 
# "abadabac" 반복되지않는 문자 :d, c 이면 첫번째 문자인 d를 반환하면 o 

input2 = "abadabac"
def find_not_repeating_first_character(string):
    for str in string:
        print(str)



find_not_repeating_first_character(input2)