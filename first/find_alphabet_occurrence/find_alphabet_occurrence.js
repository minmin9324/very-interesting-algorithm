const string = "hello my name is mango";

const findMaxOccurredAlphabet1 = (string) => {
  let array = [];
  let indexArray = [];
  for (let i in string) {
    if (string[i] == " ") {
      continue;
    }
    if (array.indexOf(string[i]) !== -1) {
      indexArray[array.indexOf(string[i])] += 1;
      continue;
    }
    array.push(string[i]);
    indexArray.push(1);
  }

  let max_occurrence = 0;
  let max_alphabet_index = 0;
  for (let i in array) {
    if (indexArray[i] > max_occurrence) {
      max_occurrence = indexArray[i];
      max_alphabet_index = i;
    }
  }

  return array[max_alphabet_index];
};

const result1 = findMaxOccurredAlphabet1(string);

console.log(result1);
//const result2 = findMaxOccurredAlphabet2(string);
