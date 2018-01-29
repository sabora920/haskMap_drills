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
      freq._slots[freq._findSlot(letter)].value++;
    } else {
      freq.set(letter, 1);
    }
    console.log(freq);
  }

  console.log(freq._slots.length);
  let count = 0;
  for(let j=0; j<freq._slots.length; j++){
    //   console.log('this is inside the j for loop', freq._slots[j])
      if(freq._slots[j] !== undefined){
        //console.log('And again',freq._slots[j])
            if(freq._slots[j].value % 2 !== 0){
                count++
            }
      }
  }
  console.log(count)
    if(count >= 2){
        console.log('false');
    } else {
        console.log('true')
    }
}

isPalindrome('rriiiaacce')
