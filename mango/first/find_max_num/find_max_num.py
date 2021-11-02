input = [3,5,6,1,2,4]
def find_max_num1(array):
    for num in array:
        for compare_num in array:
            if num < compare_num:
                break
        else:
            return num

result1 = find_max_num1(input)




def find_max_num2(array):
    max_num=array[0]
    for num in array:
        if num > max_num:
            max_num=num

    return max_num

result2 = find_max_num2(input)


print(f'result1:{result1} result2:{result2}')