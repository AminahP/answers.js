////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++){
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 1; i <= 200; i += 2){
    console.log(i)
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
/*
Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/ 

for (let i = 1; i <= 100; i++){
    if( i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    }else if ( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else{
        console.log(i)
    }
}
// rethink answer can i just ssay 15

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee.splice(2, 1, 5001);
 console.log(plantee)

// 2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy.splice(3, 1, "Gotham City")
console.log(wolfy)

// 3.Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins");
console.log(dart)

// 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy.shift();
wolfy.push("Gameboy");
console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
 let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let ninja of ninjaTurtles ){
    console.log(ninja.toUpperCase())
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////

//favMovies
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
  
console.log(favMovies.indexOf('Titanic'));

favMovies.sort();
favMovies.pop();
favMovies.push('Guardians of the galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
favMovies.splice(0, 3, "Avatar");
favMovies.slice(9);

console.log(favMovies)


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",   
    ["Lucinda", "Jacc", "Neff", "Snoop"],         
    ["Petunia",
    ["Baked Goods", "Waldo"]]
  ];
  whereIsWaldo.splice(1, 1);
  console.log(whereIsWaldo);
  whereIsWaldo[1][2] = 'No One';
  console.log(whereIsWaldo);
  console.log(whereIsWaldo[2][1][1]);
  


////////////////////////////////
//  Excited Kitten
////////////////////////////////
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



let kittyTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
let meow = Math.floor(Math.random() * 3);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let meow = Math.floor(Math.random() * 3);
    console.log(kittyTalk[meow]);
  } else {
    console.log('Love me, pet me! HSSSSSS!');
  }
}


////////////////////////////////
//  Find the Median
////////////////////////////////