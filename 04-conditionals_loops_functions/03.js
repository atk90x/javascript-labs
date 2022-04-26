function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

let i = 0;
number = 0;
while (i <= 5000){
    if (i % 2 == 0){
        number = number +3;
    }else number = number -1;
    //console.log(number);
    i++
}
console.log(number);
console.log("Exercise B ------------");

number = getRandomNumber();
//console.log(number);
while (number % 11 !== 0){
    console.log(number);
    number = getRandomNumber();
}