//--------Hamster-------
/*
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price */



class Hamster {
    constructor(owner = '', name, price) {
      this.owner = owner;
      this.name = name;
      this.price = price;
    }
    wheelRun() {
      console.log("squeak squeak");
    }
    eatFood() {
      console.log("nibble nibble");
    }
    getPrice() {
      return this.price
    }
  }
  
  ham = new Hamster(owner = tim, name = "Tim", price = 5);
  ham.getPrice()
  console.log(ham.getPrice(),  ham.wheelRun(),  "have fun!")
 
  
  // Git commit created hamster class
  
  
  // ----------Person---------
  /*
  attributes:
  
  name - set name from parameter in constructor method
  age - initially 0
  height - initially 0
  weight - initially 0
  mood - integer starting at 0 initially
  hamsters - empty array initially
  bankAccount - initially set to 0
  methods:
  
  getName() - returns name
  getAge() - returns age
  getWeight() - returns weight
  greet() - logs a message with person's name
  eat() - increment weight, increment mood
  exercise() - decrement weight
  ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
  buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
  */
  class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamster = hamsters;
      this.bankAccount = bankAccount;
    }
    getName(){
      return this.name;
    }
  
    getAge(){
      return this.age;
    }
  
    getWeight(){
      return this.weight;
    }
  
    greet(){
      console.log(`Hello, ${this.name}`);
    }
  
    eat(){
      this.weight++;
      this.mood++;
    }
  
    exercise(){
      this.weight--;
    }
  
    ageUp(){
      this.age++; 
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAcount += 10; 
    }
  
    buyHamster(hamsters){
      this.hamsters.push.hamsters // push hamster object on hamster array .push 
      this.mood += 10;
      this.bankAccount - ham.getPrice(Hamster)
  
    }
  }
  // Need to use the class after defining it
 tim = new Person(name = "me", age = 100, height = 10, weight = 2000, mood = 1, bankAccount = 1000000);
  
  
  
  
  
  //Create a Story with your Person class
  /*
  Feel free to update or add methods to automate some of these tasks.
  
  Instantiate a new Person named Timmy
  Age Timmy five years
  At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
  Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
  Age Timmy 9 years
  Create a hamster named "Gus"
  Set Gus's owner to the string "Timmy"
  Have Timmy "buy" Gus
  Age Timmy 15 years
  Have Timmy eat twice
  Have Timmy exercise twice
  */
    const timmy = new Person ('Timmy');
        timmy.getAge += 5  
        
  // getAge is always going to be 25 years old for timmy, lol jk
   
  