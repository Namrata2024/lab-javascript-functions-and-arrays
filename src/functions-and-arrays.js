// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Iteration #2: Find longest word
function findLongestWord(words) {
  if (words.length === 0) return null;
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Iteration #3.1 Bonus:
function sum(array) {
  if (!Array.isArray(array)) {
    throw new Error("Unsupported data type sir or ma'am");
  }
  
  let total = 0;
  for (let element of array) {
    if (typeof element === 'number') {
      total += element;
    } else if (typeof element === 'string') {
      total += element.length;
    } else if (typeof element === 'boolean') {
      total += element ? 1 : 0;
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(numbers) {
  if (numbers.length === 0) return null;
  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}

// Level 2: Array of strings
function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  let totalLength = 0;
  for (let word of wordsArr) {
    totalLength += word.length;
  }
  return totalLength / wordsArr.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) return null;
  let total = 0;
  for (let element of arr) {
    if (typeof element === 'number') {
      total += element;
    } else if (typeof element === 'string') {
      total += element.length;
    } else if (typeof element === 'boolean') {
      total += element ? 1 : 0;
    } else {
      return null;
    }
  }
  return total / arr.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) return null;
  return [...new Set(wordsUnique)];
}

// Iteration #6: Find elements
function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) return null;
  return wordsFind.includes(word);
}

// Iteration #7: Count repetition
function howManyTimes(wordsCount, word) {
  return wordsCount.filter(w => w === word).length;
}

// Iteration #8: Bonus
function greatestProduct(matrix) {
  let greatest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Check horizontally
      if (j + 3 < matrix[i].length) {
        let product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (product > greatest) {
          greatest = product;
        }
      }
      // Check vertically
      if (i + 3 < matrix.length) {
        let product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (product > greatest) {
          greatest = product;
        }
      }
    }
  }
  return greatest;
}

// Bonus - Iteration #8.1
function greatestProductOfDiagonals(matrix) {
  let greatest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Check diagonally (top-left to bottom-right)
      if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
        let product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
        if (product > greatest) {
          greatest = product;
        }
      }
      // Check diagonally (bottom-left to top-right)
      if (i - 3 >= 0 && j + 3 < matrix[i].length) {
        let product = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] * matrix[i - 3][j + 3];
        if (product > greatest) {
          greatest = product;
        }
      }
    }
  }
  return greatest;
}

// Exporting functions for testing
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
    greatestProductOfDiagonals
  };
}
