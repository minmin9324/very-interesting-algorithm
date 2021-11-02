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

const findMaxOccurredAlphabet2 = (string) => {
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];
  let max_occurrence = 0;
  let max_alphabet = alphabetArray[0];
  let occurrence = 0;
  for (let i = 0; i < alphabetArray.length; i++) {
    occurrence = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] == alphabetArray[i]) {
        occurrence += 1;
        if (occurrence > max_occurrence) {
          max_alphabet = string[j];
          max_occurrence = occurrence;
        }
      }
    }
  }
  return max_alphabet;
};

const result1 = findMaxOccurredAlphabet1(string);
const result2 = findMaxOccurredAlphabet2(string);
console.log("result1:", result1, "result2:", result2);
