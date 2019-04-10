//Title: Changing letters(7kyu)
/*
Description:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"
*/ 

//Solution:

const swap = (st)=>st.replace(/[aeiou]/gi, x =>x.toUpperCase())



//--------------------------------------------------------------------------------------------


// Title: Find the stray number(7kyu)
/*
Description:
You are given an odd-length array of integers, in which all of them are the 
same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/ 

//Solution:

const stray = (numbers) =>{
    if(numbers[0] !== numbers[1] )
    return numbers[0]
     else for(let i = 0; i<numbers.length; i++){
       if(numbers[i] !== numbers[i+1]){
       return numbers[i+1]
     }
     
   }
   }



//--------------------------------------------------------------------------------------------


//Title: Exes and Ohs(7kyu)

/*
Description:
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

const XO=(str) =>{
  let x = str.match(/\x/gi)
  let o = str.match(/\o/gi)
  if(str === null) return false
  return (x && x.length) === (o && o.length)
}


//--------------------------------------------------------------------------------------------

//Title: BRL currency format(7kyu)

/*
Description:

Format a number as BRL money, i.e. R$ 10,00

More examples

currencyBRL(10) => 'R$ 10,00'
currencyBRL(10.5) => 'R$ 10,50'
currencyBRL(10.05) => 'R$ 10,05'
currencyBRL(.5) => 'R$ 0,50'
The values must be rounded to the nearest value, like:

currencyBRL(10.505) => 'R$ 10,51'
currencyBRL(10.504) => 'R$ 10,50'
currencyBRL(10.502) => 'R$ 10,50'
currencyBRL(10.509) => 'R$ 10,51'

*/ 

//Solution
const currencyBRL = (number)=> {
  if(number){
  let decimal = "R$ " + number.toFixed(2)
   return decimal.replace(".",",")
  }
   else return 'R$ 0,00'
  }