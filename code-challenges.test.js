// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('codedMessage', ()=>{
  it('takes a string and returns a string with a coded message', () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"

    expect(codedMessage(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
    expect(codedMessage(secretCodeWord2)).toEqual('G0bbl3dyg00k')
    expect(codedMessage(secretCodeWord3)).toEqual('3cc3ntr1c')
  })
})

// b) Create the function that makes the test pass.

//create a function named codedMessage that recieves a string as a parameter
const codedMessage = (string) => {
  //use .split('') to convert the string to an array with each value separated
  return string.split('').map((value) => {
    //use .toLowerCase() to make conditional statements to see if the value lowercased is a, e, i, or o and change the value
    if (value.toLowerCase() === 'a'){
      return value = '4'
    }
    if (value.toLowerCase() === 'e'){
      return value = '3'
    }
    if (value.toLowerCase() === 'i'){
      return value = '1'
    }
    if (value.toLowerCase() === 'o'){
      return value = '0'
    }
    //if the value is not one of those vowels then return it unchanhed
    return value
    //use .join('') to bring all the values of the array into one string
  }).join('')
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('letterContain', ()=>{
  it('takes in an array of words and a single letter and returns an array of all the words containing that particular letter', () =>{
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(letterContain(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(letterContain(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})



// b) Create the function that makes the test pass.

//create a function named letterContain that recieves an array and a string as a parameter (where string is a lower cased letter)
const letterContain = (array, string) =>{
  //use .filter() to iterate over each value
  //use .toLowerCase to match casing of string
  //use .includes() to see if the value (which is a word) has that letter (string)
  //Keep all values with that string and return the new array.
  return array.filter((value) => (value.toLowerCase().includes(string)))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse', () =>{
  it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', () =>{

    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true

    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)

  })
})



// b) Create the function that makes the test pass.

//create a function named fullHouse that takes an array as a parameter
const fullHouse = (array) => {
  //filter through the array using the .filter() method to remove duplicates
  //If the value being iterated over exists earlier in the array remove it
  //get the length of that new array and have it assigned to a variable named cards (there should only be 2 different cards)
  let cards = array.filter((value, index) => array.indexOf(value) === index).length
  //create a variable that will hold the value of the sum array's first index plus other values that are the same in the array
  let pairOrThree = 0
  //make a for loop that will iterate over the length of the array
  for(let i = 0; i < array.length; i++){
    //if the index that we are iterating over is found at array[0] we increment the "pairOrThree" variable by 1
    //we want the "pairOrThree" variable to equal either 2 or 3 (depending on wether it is a pair or three)
    if(array[i]===array[0]){
      pairOrThree +=1
    }
  }
  //if pairOrThree is 2 or 3 AND the different cards we have are 2
  //then we have a full house
  if ((pairOrThree === 2 || pairOrThree === 3) && cards === 2) {
    return true;
    //or maybe we dont have a full house
  } else {
    return false;
  }
};