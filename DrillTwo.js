function jediName (firstName, lastName) {
    return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName("Jaye", "Laguardia"));

function beyond (num) {
    if(num === Infinity) {
        console.log("And beyond");
    }
    if(Number.isFinite(num) && num > 0) {
        console.log("To infinity");
    }
    if(Number.isFinite(num) && num < 0) {
        console.log("To negative infinity");
    }
    if(num === 0) {
        console.log("Staying home");
    }
}

beyond(-345);