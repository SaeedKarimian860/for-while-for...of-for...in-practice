//for(let i = 0; i < 10; i++) {
//    console.log(i);
//    if (i === 5) {
//        break;
//    }
//}

// Using break as another method when creating while loops
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
    if (target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);


//Quick lesson on For...Of
//regular way of writing a for loop
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}
//Much cleaner and easier using for..of loop for same result
for (let sub of subreddits) {
    console.log(sub);
}

for (let char of 'cockadoodledoo') {
    console.log(char.toUpperCase());
}



//More on for...of loop
const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
];

//for (let i = 0; i < magiceSquare.length; i++) {
//    let row = magicSquare[i];
//    let sum = 0;
//    for (let j = 0; j < row.length; j++) {
//        console.log(row[j]);
//        sum += row[j];
//    }
//    console.log(`${row} summed to ${sum}`);
//}

//nested example of previous code using for...of loop
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}


//example of when for...of loop does not give you an advantage
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`);
}
// if you used a for...of loop it would be very difficult, you would have to work backwards to find the index of each word to be able to pair them (words1 with words2)


//Using for...of loop with objects


const movieReviews = {
    Arrival             : 9.5,
    Alien               : 9,
    Amelie              : 8,
    'In Bruges'            : 9,
    Amadeus             : 10,
    'Kill Bill'            : 8,
    'Little Miss Sunshine' : 8.5,
    Coraline            :7.5
};

//Use Object.keys to access keys in a for...of loop
//for (let movie of Object.keys(movieReviews)) {
//    console.log(movie);
//}

//To access keys and values in a for...of loop
for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
    total += r;
}
let avg = total / ratings.length;
console.log(total);



//for...in loops
const jeopardyWinnings = {
    regularPlay             : 2522700,
    watsonChallenge         : 300000,
    tournamentOfChampions   : 500000,
    battleOfTheDecades      : 100000
};

for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

//this is to get the key and value printed together + total winnings
//let total = 0;
//for (let prop in jeopardyWinnings) {
//    total += jeopardyWinnings[prop];
//}
//console.log(`Ken Jennings Total Earnings: ${total} `);


for (let k in [88, 99, 77, 66]) {
    console.log(k);
}