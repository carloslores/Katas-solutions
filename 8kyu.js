//Title: Abbreviate a Two Word Name (8kyu)
/* Description: 
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

//--Solution:

 const abbrevName = (name)=>{
    let arr = name.split(" ")
    return arr[0][0].toUpperCase()+ "." + arr[1][0].toUpperCase()
    }



// ---------------------------------------------------------------------------------------

//Title: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence(8kyu)
/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/ 

//--Solution:

const replace = s => s.replace(/[aeiou]/gi, '!');



// ---------------------------------------------------------------------------------------

//Title:  Is the date today (8kyu)

/* Description:
Write a simple function that takes as a parameter a date 
object and returns a boolean value representing whether 
the date is today or not.Make sure that your function does 
not return a false positive by just checking just the day.
*/ 

//--Solution:

const isToday = (date)=> {
    let d = new Date()
    d = d.toLocaleString().split(" ") 
    let inDat = date.toLocaleString().split(" ")
    d.pop()
    inDat.pop()
    return d.join("") === inDat.join("")
    }
