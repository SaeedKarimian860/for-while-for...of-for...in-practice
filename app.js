// for (let i = 0; i <= 5; i++) {
//    console.log(i);
// }

// let j = 0;
// while (j <= 5) {
//   console.log(j);
//    j++;
// }


const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10); //without this you could get an infinite loop!
}
console.log(`Target: ${target} Guess: ${guess}`)
console.log(`CONGRATS YOU WIN!!!`);


// while(some condition)
//in the loop, update or attempt to make that condition false