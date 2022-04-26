/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

//C = K - 273.15
function KtoC(value){
    c = value - 273.15;
    return c;
}

function CtoK(value){
    k = value + 273.15;
    return k;
}

function FtoK(value){
    k = (((value - 32) * 5) / 9) + 273.15;
    return k;
}

function KtoF(value){
    f = ((value - 273.15) * 1.8) + 32;
    return f;
}

function pythagoras(value1, value2){
    f = Math.pow(value1, 2) + Math.pow(value2, 2);
    return Math.sqrt(f);
}

function MToKm(value){
    k = value * 1.609344;
    return k;
}

function KmToM(value){
    m = value * 0.62137;
    return m;
}
function inchToCm(value){
    cm = value * 2.54;
    return cm;
}
function CmToInch(value){
    cm = value / 2.54;
    return cm;
}

// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));
