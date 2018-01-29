'use strict';

const HashMap = require('./HashMap.js')

//if there are an even number of letters then every letter has to be in the string 2 times 
//if there is an odd number of characters then one letter can only appear once but the rest of the letters must appear 2 times.

function isPalindrome(string){
    string = string.toLowerCase().trim()
    if(string.length % 2 === 0){
        //even number of characters in string
        let freq = {};
        for(let i=0; i<string.length; i++){        
            let letter = string.charAt(i);
            // console.log(letter);
            if(freq[letter]){
                freq[letter]++
            } else {
                freq[letter] = 1
            }
            console.log(freq);
            // return freq;
        }
    } 
    else if(string.length % 2 !== 0){
        // odd number of characters in string

    } else {
        // for empty string or string.length = 0

    }

}

isPalindrome('Hannah');