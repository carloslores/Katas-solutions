//Title: Find the missing letter(6kyu)

/*
Description:
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/ 

//Solution: 

const findMissingLetter = (array) =>{
    let str = array.join("")
    for(let i = 0; i < str.length; i++){
       if(str.charCodeAt(i+1) !== str.charCodeAt(i) + 1){ 
       let chr = str.charCodeAt(i) + 1
       return String.fromCharCode(chr)
       }
       }
  
    return ' ';
  }





//---------------------------------------------------------------------------------------

//Title: first character that repeats(6kyu)

/*
Description:
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
*/ 



//Solution: 
const firstDup =(s) =>{
 let letter = s.split("")
 let counter = 0
 let firstRep = ""
 let regEx = /\s\w*/
   for(let j = 0; j < s.length; j++){
    counter = 0
      for(let i = 0; i < s.length; i++){
        if(s[j] == s[i])counter +=1
        if (s[j] === s[i] === regEx) {
           firstRep = s[j]
         return firstRep}
         }
       if(counter >= 2){
       firstRep = s[j]
       return firstRep
    } 
  }
 return undefined
}




//---------------------------------------------------------------------------------------




//Title: Lowest product of 4 consecutive numbers(6kyu)

/*
Description:
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789")--> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

//Solution:


const lowestProduct=(input)=> {
    let arr = []
    for(let i = 0; i <input.length; i++) {
      arr.push(input[i] * input[i+1]* input[i+2]* input[i+3])
    }
    if (input.length <= 3) return "Number is too small"
    else return arr.sort((a,b)=>a-b)[0]
  }