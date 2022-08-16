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
  
  // const ham = new Hamster( 'tim', Tim,  5);
  // ham.getPrice()
  // console.log(ham.getPrice(),  ham.wheelRun(),  "have fun!")
 
  
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
  // */
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
      this.bankAccount - ham.getPrice(hamster)
  
    }
  }
  // Need to use the class after defining it
//  const Tim = new Person( "me", 100, 10, 2000, 1, 1000000);
  
  
  
  
  
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
        timmy.this.Age += 5 ;
        console.log(timmy);
        timmy.exercise += 5;
        console.log(timmy)
        timmy.eat += 5;
        console.log(timmy)
        timmy.ageUp += 4;
        console.log(timmy)
        const gus = new Hamster ('Timmy', 'Gus');
        console.log(gus)
        timmy.buyHamster(gus);
        console.log(timmy)
        timmy.ageUp += 6;
        console.log(timmy)
        timmy.eat += 2;
        console.log(timmy)
        timmy.excercise += 2;
        console.log(timmy)












        /*
        Chef Make Dinners
Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners
        
        */ 

class Dinner {
  constructor(type, appetizer, entree, dessert){
    this.type = type;
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  constructor(mealType){
    this.mealType = mealType;
    this.listOfMeals = [];
  }
makeNewMeal (appetizer, entree, dessert){
  const newDinner = new Dinner(this.mealType, appetizer, entree, dessert);
  this.listOfMeals.push(newDinner);
}
printNewMeal(){
  for (let choice of this.listOfMeals){
     console.log(choice);
  }
} 
}


let italianDinner = new Chef('Italian');
let texMexDinner = new Chef('Tex-Mex');
let seafoodDinner = new Chef('Seafood');

italianDinner.makeNewMeal('bruchetta', 'chicken parmesan', 'cherry cheesecake');
texMexDinner.makeNewMeal('chips and queso', 'steak fajitas', 'sopapillas');
seafoodDinner.makeNewMeal('oyster shooters', "lobster po' boys", 'lemon meringue pie');

italianDinner.printNewMeal();
texMexDinner.printNewMeal();
seafoodDinner.printNewMeal();



    
  // getAge is always going to be 25 years old for timmy, lol jk
   
  