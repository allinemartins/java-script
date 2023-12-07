// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeCharacters (a, count) {
    return a.slice(0, -count);
}

//console.log(removeCharacters('alline', 2));


// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percent(a,b){
    return ((a*b)/100);
}

//console.log(percent(10, 1));


// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function mathOperatores(a,b,c,d,e,f){
    return Math.pow(((((a + b) - c) * d) / e), f); // or ** e elevacao a potencia no JS
}

//console.log(mathOperatores(6,2,1,4,2,3));

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation