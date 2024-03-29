'use strict';

//Begin jediName

function jediName (firstName, lastName) {
  return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('Jaye', 'Laguardia'));


//Begin To Inifnity and Beyond

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

console.log(crackingCode('craft'));
console.log(crackingCode('block'));
console.log(crackingCode('argon'));
console.log(crackingCode('meter'));
console.log(crackingCode('bells'));
console.log(crackingCode('brown'));
console.log(crackingCode('croon'));
console.log(crackingCode('droop'));


//Begin How many days in a month

function manyDays(month, leapYear = false) {
  let result = '';

  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = `${month} has 31 days`;
    break;

  case 'April':
  case 'June':
  case 'September':
  case 'November':
    result = `${month} has 30 days`;
    break;
    
  case 'February':
    if (leapYear === true) {
      result = `${month} has 29 days`;
    } else {
      result = `${month} has 28 days`;
    }
    break;

  default:
    result = `Must provide a valid month.`;
  }
  return result;
}

console.log(manyDays('June', false));

//Begin Rock, Paper, Scissors

/* 1 beats 3
   2 beats 1
   3 beats 2
*/ 

function rockPaperScissors(choice) {
  if (choice !== 1 && choice !== 2 && choice !== 3) {
    return `That is not a valid entry!  Enter 1 for rock, 
    2 for paper, or 3 for scissors`;
  }

  const computer = Math.floor(Math.random() * 3) + 1;
  
  if (computer === choice) {
    return `It's a tie!`;
  }

  if (computer === 1) {
    if (choice === 2) {
      return `You are the winner!`;
    } else {
      return `The computer wins!`
    }
  }

  if (computer === 2) {
    if (choice === 1) {
      return `The computer wins!`;
    } else {
      return `You are the winner!`;
    }
  }

  if (computer === 3) {
    if (choice === 1) {
      return `You are the winner!`;
    } else {
      return `The computer wins!`;
    }
  }
}

console.log(rockPaperScissors(3));
