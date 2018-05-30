// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1,num2) {
  return num1 * num2;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree (num1,num2,num3) {
  return num1 + num2 + num3;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber (num1,num2) {
  return Math.min(num1,num2);

  // if (num1 < num2) {
  //   return num1;
  // } else {
  //   return num2;
  // }
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree (num1,num2,num3) {
  return Math.max(num1,num2,num3);
}

// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString (str) {
  return str.split("").reverse().join("");
}

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel (str) {
  return str.replace(/[aeiou]/gi,'');
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd (arr) {
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] % 2 ) {
        arr.splice(i, 1);
    }
  }
  return arr;
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven (arr) {
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] % 2 === 0) {
        arr.splice(i, 1);
    }
  }
  return arr;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString (arr) {
  // var longest = arr[0];
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i].length > longest.length) {
  //     longest = arr[i];
  //   }
  // }
  // return longest;

  var longestWord = arr.reduce((a,b) => {
    return (b.length > a.length) ? b : a;
  })
  return longestWord;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree (arr) {
  // for (var i = 0; i < 3; i++) {
  //   arr=arr.splice(1);
  // }
  // return arr;
  return arr.splice(3, arr.length - 3);
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i+=2) {
    obj[`${arr[i]}`] = `${arr[i+1]}`;
  }
  return obj;
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
function fizzBuzz (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return num = `FizzBuzz`;
  } else if (num % 5 === 0) {
    return num = `Buzz`;
  } else if (num % 3 === 0) {
    return num = `Fizz`;
  } else {
    return num;
  }
}
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
