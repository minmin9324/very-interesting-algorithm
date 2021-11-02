string="hello my name is mango"

def find_max_occurred_alphabet1(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord('a') 
        alphabet_occurrence_array[arr_index] += 1

    max_occurrence=0
    max_alphabet_index=0
    for index in range(26):
        alphabet_occurrence = alphabet_occurrence_array[index]
        if alphabet_occurrence > max_occurrence:
            max_occurrence = alphabet_occurrence 
            max_alphabet_index = index
    return chr(max_alphabet_index + ord('a'))


result1=find_max_occurred_alphabet1(string)



def find_max_occurred_alphabet2(string):
    alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "x", "y", "z"]
    max_occurrence=0
    max_alphabet=alphabet_array[0]
    for alphabet in alphabet_array:
        occurrence = 0
        for char in string:
            if char == alphabet:
                occurrence += 1
                if occurrence > max_occurrence:
                    max_alphabet = alphabet
                    max_occurrence = occurrence
    return max_alphabet

result2=find_max_occurred_alphabet2(string)




print("result1:", result1, "result2:", result2);