//Title: Moving Zeros To The End(5kyu)

/*
Description:
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

Example:

 moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/ 


//Solution: 

const moveZeros =  (arr) => {
  let arr1 = arr.filter(arg =>arg !== 0)
  let arr2 = arr.filter(arg =>arg === 0)
 for(let i = 0; i < arr2.length; i++){
   arr1.push(arr2[i])
 }
  return arr1
}



//---------------------------------------------------------------------------------------------------


//Title: First non-repeating character(5kyu)

/*
Description:
Write a function named first_non_repeating_letter that takes a string input,
and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same 
character, but the function should return the correct case for the initial letter.
For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("")
or None -- see sample tests.

*/ 

//Solution: 
const firstNonRepeatingLetter = (s)=> {
    let letter = s.split("")
    let nonRep = ""
    let h = 0
    
    for (let i = 0; i < letter.length; i++){
       h = 0
       for (let j = 0; j < letter.length; j++){
       if(letter[i].toLowerCase() == letter[j].toLowerCase()) h +=1
       }
       if(h < 2){
       nonRep = letter[i]
       break
       }
    }
    return nonRep
    
  }






