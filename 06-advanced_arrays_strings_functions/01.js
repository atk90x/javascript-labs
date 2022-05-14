/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

l = function(item){
    console.log(item);
}

// ----------------------------1

// --------- Generating the array of random numbers.

// random number generator function
rnd = function(multiplier){
    return Math.round(Math.random()* multiplier);
}

// --------- Generating the array
numbers = [];
for(let i = 0; i < 100; i++){
    numbers.push(rnd(100));
    //console.log(numbers[i]);
}
l(numbers);

// ----------------------------2

//  --------- Functions for each operation

sum = function(array){
    result = 0;
    array.forEach(element => {
        result = result + element;
    });
    return result;
}

cnt = function(array){
    result = 0;
    array.forEach(element => {
        result++;
    });
    return result;
}

avg = function(array){
    let result = 0;
    let count = 0;
    let sum = 0;
    array.forEach(element => {
        sum = sum + element;
        count++;
    });
    result = sum / count;
    return result;
}

l(sum(numbers));
l(cnt(numbers));
l(avg(numbers));

//----------------------------3
hlv = function(array){
    halved = []
    array.forEach(element => {
        halved.push(element / 2);
    });
    return halved;
}

halved = hlv(numbers);
//----------------------------4
l(sum(halved));
l(cnt(halved));
l(avg(halved));

//----------------------------5
// I really don't understand this excersice (already done it?).
// So I will create a function that does it all

alloperations = function(array){
    let avg = 0;
    let count = 0;
    let sum = 0;
    array.forEach(element => {
        count++;
        sum = sum + element;
    });
    console.log(`The count of the array elements is ${count}`);
    console.log(`The sum of the array elements is ${sum}`)
    console.log(`The average value of the array elements is ${sum / count}`);
}

l(alloperations(numbers));