
  
'use strict';

const HashMap = require('./hashMap');

function anagramGroup(arr) {
  for(let i = 0; i < arr.length; i++) {
    let word = arr[i].concat('Hash');
    word = new HashMap();
    for(let l =0; l < arr[i].length; l++) {
      word.set(arr[i][l], l);
    }
  }
}

anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
