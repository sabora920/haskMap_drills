'use strict';

const HashMap = require('./HashMap.js');

//if there are an even number of letters then every letter has to be in the string 2 times 
//if there is an odd number of characters then one letter can only appear once but the rest of the letters must appear 2 times.

function isPalindrome(string){
  string = string.toLowerCase().trim();
  
  let freq = new HashMap();
  for(let i=0; i<string.length; i++){       
    let letter = string.charAt(i);
    //console.log('this value', freq._slots[freq._findSlot(letter)]);
    if(freq._slots[freq._findSlot(letter)]){
        
      //console.log('hi');
      freq._slots[freq._findSlot(letter)].value++;
    } else {
      freq.set(letter, 1);
    }
    console.log(freq);
    // return freq;
  }
  //if more than 1 element has a value = 1, return false
  for(let j = 0; j < freq._slots.length; j++) {
    let count = 0;
    if(freq._slots[j].value % 2 !== 0) {
        count++;
        if()
    }
  }
}

isPalindrome('racecar');