/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

items = ["silla", "sinte","modular","drumbox","guitarra","bajo"]

boxes = [
    box1 = ["crema", "vitaminas", "crema de manos"],
    box2 = ["plato", "taza", "cubiertos"],
    box3 = ["cables", "adaptadores", "pilas"]
];

console.log(boxes[1][0]);
console.log(boxes[2][1]);
console.log(boxes[1][1]);
console.log(boxes[2][0]);
console.log(boxes[2][2]);

numbers =[];
for(i = 1; i < 101; i++){
    numbers.push(i);
}

numbers =[];
sum = 0;
for(i = 1; i < 101; i++){
    sum = sum + i;
}
console.log(`The sum of everything is ${sum}`);

rNumbers =[];
for(i = 1; i < 101; i++){
    rNumbers.push(Math.floor(Math.random() * 10));
}
console.log(`A random number is ${rNumbers[2]}`);
console.log(rNumbers.length);

odd = [];
even = [];
for(i = 0; i < rNumbers.length; i++){
    //console.log(rNumbers[i]);
    if(rNumbers[i] % 2 == 0){
        even.push(rNumbers[i])
    }else{
        odd.push(rNumbers[i])
    }
}
console.log(`The even list: ${even}`);
console.log(`The odd list: ${odd}`);


function sumar(list){
    for(i = 1; i < list.length; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(`The sum of all random numbers is ${sumar(numbers)}`);
console.log(`The sum of all odd numbers is ${sumar(odd)}`);
console.log(`The sum of all even numbers is ${sumar(even)}`);