'use strict';

const HashMap = require('./hashMap.js');

let lor = new HashMap();

lor.set('Hobbit', 'Bilbo');
lor.set('Hobbit2', 'Frodo'); //must have unique key or it will overwrite the existing key
lor.set('Wizard', 'Gandolf');
lor.set('Human', 'Aragon');
lor.set('Elf', 'Legolas');
lor.set('Maiar', 'The Necromancer');
lor.set('Maiar2', 'Sauron');
lor.set('RingBearer', 'Gollum');
lor.set('LadyOfLight', 'Galadriel');
lor.set('HalfElven', 'Arwen');
lor.set('Ent', 'Treebeard');

//console.log(lor._findSlot('Maiar'));
//console.log(lor._slots[lor._findSlot('Maiar')].value);
//console.log(lor);






