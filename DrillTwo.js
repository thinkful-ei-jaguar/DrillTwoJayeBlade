'use strict';
function jediName (firstName, lastName) {
  return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Jaye', 'Laguardia'));

function beyond (num) {
  if(num === Infinity) {
    console.log('And beyond');
  }
  if(Number.isFinite(num) && num > 0) {
    console.log('To infinity');
  }
  if(Number.isFinite(num) && num < 0) {
    console.log('To negative infinity');
  }
  if(num === 0) {
    console.log('Staying home');
  }
}

beyond(-345);

// Begin Cracking the Code

function crackingCode(word) {
  if (word[0] === 'a') {
    return word[1];
  } 
  else if (word[0] === 'b') {
    return word[2];
  }
  else if (word[0] === 'c') {
    return word[3];
  }
  else if (word[0] === 'd') {
    return word[4];
  }
  else {
    return ' ';
  }
}

console.log(crackingCode("craft"));
console.log(crackingCode("block"));
console.log(crackingCode("argon"));
console.log(crackingCode("meter"));
console.log(crackingCode("bells"));
console.log(crackingCode("brown"));
console.log(crackingCode("croon"));
console.log(crackingCode("droop"));





