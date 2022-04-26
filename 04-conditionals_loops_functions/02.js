/**
 * You may want to modify the html file to mute the output of certain exercises,
 * this one for instance, will generate many lines of output. You can comment
 * out lines in HTML with <!-- comment --> tags.
 *
 * 1. Create a for loop that will log all the numbers between 5 and 1000.
 *    incrementing in 5s. So the output would start "5, 10, 15, 20 ..."
 * 2. Create a for loop that outputs every number between 100 and -100 included.
 * 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
 *    9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
 *    times, what is the number you get at the end?
 *
 * This last one can be tricky! There are a couple ways to do it, see if you can
 * find both ways!
 *
 */

//for (let i = 0; i <= 100; i+=5){
 //   l(i);
//}

/*for (let i = 100; i >= -100; i--){
       l(i);
}
*/


number = 0;
/*
balance = true;
for (let i = 0; i <= 5000; i++){
    if (balance == true){
        number = number + 3;
        balance = false;   
    }else{
        number = number -1;
        balance = true;       
    }
    console.log(number);
}
*/

/* for (let i = 0; i <= 5000; i++){
    if (i % 2 == 0){
        number = number +3;
    }else number = number -1;
    console.log(number);
}
console.log(number); */



// I thougt this would work...
/*for (let i = 0; i <= 2500; i++){
    number = number +3;
    console.log(number);
    number = number -1;
    console.log(number);
}*/

