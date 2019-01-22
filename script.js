console.log("REBOOT");
alert("ENTER THE VOID");

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)

// var is a way of declaring variables. its how javascript started out and its what weve learned so far

// var myName ="Dracula";
// console.log(myName);

// var hisAge = 666;
// console.log(hisAge);

// var sum = 2 + 2 + 2;
// console.log("This is the sum of the math problem variable [sum]", sum);
// the above will not show up as a string because it is not in quotes. javascript will solve the
// equation.

// var likesBlood = true;
// console.log("Does Dracula like blood?", likesBlood);
// a boolean, with a value of true or false, not in quotes or brackets.

// let is almost a direct substitue for var. it can be reassigned
// let likesPizza = true;
// likesPizza = false;
// console.log(likesPizza);

// let myAge = 47;
// myAge = "cheese";
// console.log(myAge);

// const cannot be reassigned. It is safer, so you don't accidentally fuck up with some reassigned 
// var or let "default to const"

// const name = "Dracula";
// console.log(name);
// this will show up with an error because const will not allow you to reassign the name variable


// 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)

// var myName ="Matthew Hiner Rowe";

// 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you hvae

// let numberOfPets; // instantiate
// numberOfPets = 1; // assign

// 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)

// const socialSecurity = "666-666-666"; 
// const bio = `${myName} has ${numberOfPets} pet. My pets's social security number is ${socialSecurity}.`;
// console.log(bio);

// Arrays store collections of data 

// let favoriteFoods = ["tacos", "steak", "bacon",];
// console.log(favoriteFoods[2])
// favoriteFoods.push("pasta");
// favoriteFoods.push("sushi");
// console.log(favoriteFoods.length);

// for(let i = 0; i < favoriteFoods.length; i =i + 1){
//     console.log("inside the loop", i);
//     console.log(favoriteFoods[i]);
// };

// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.

// const petNames = ["Nina", "Jack", "Noodles", "Suga", "Biddy", "Biscuits"];
// const myRealPet = "Nina";
// for(let i = 0; i < petNames.length; i++){
//     if(petNames[i] === "Nina"){
//         console.log("This is the real deal, nina, World Traveler");
//     }
//     console.log("this is i", i);
//     console.log(petNames[i]);
// };
// 2. Loop through your `petNames` array and log each pet's name to the console.
// const monsterNames=["vampire", "mummy", "sea monster", "void beast", "ornery dryad"];
// for(let i = 0; i < monsterNames.length; i++){
//     console.log("this is i", i);
//     console.log(monsterNames[i]);
// }

// conditionals - pretty much for checking if true or false
// const hasBeasts = false;
// if(hasBeasts){
//     alert("what are their names?");
// }   else{
//     alert("Seize the beasts");
// }

// const age = 22;
// const isCitizen = true;
// if(age >= 21){
//     console.log("You can drink!")
// }  ;
// if (age >= 18){
//     console.log("You can vote!")
// } 


// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.

// const favFoods = ["noodles", "tacos", "people", "apples", "pasta"];
// for(let i = 0; i < favFoods.length; i++){
//     if(favFoods[i] === "noodles" || favFoods[i] === "Noodles" || favFoods[i] === "pasta"){
//         console.log("Heck yeah!! Noodles!");
//     } 
//     console.log(favFoods[i]);
// }

// 2. Loop through the array and log each food to the console
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.
// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp

// const coOfCoffee = {
//     price: 1.99,
//     size: "16 oz",
//     ingredients: ["beans", "water"],
//     inStock: true
// }

// const Matt = {
//     name: "Matt",
//     regOrder: "espresso",
//     methodOfPayment: "visa",
//     birthday: "Aug 9",
//     pastOrders: ["latte", "double green tea latte"],
//     isCustomer: true
// }

// const david = {
//     name: "David",
//     startDate: "1/10/2017",
//     fullTime: true,
//     pay: "6 mill",
//     isCustomer: false
// }
// const joey = {
//     name: "Joey",
// }
// const coffeeShopEmployees = [david, joey]
// console.log(coffeeShopEmployees)

// for(let i = 0; i < Matt.pastOrders.length; i++){
//     console.log(Matt.pastOrders[i])
// }


// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code. I should use an object.

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky". array.

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// const mom = {
//     name: "Becky",
//     age: 35,
//     hobby: "shopping"
// }

// const dad = {
//     name: "Bobby",
//     age: 34,
//     hobby: "turkey swinging"
// }

// const bro = {
//     name: "Skyler",
//     age: 12,
//     hobby: "skateboarding"
// }

// const sis = {
//     name: "Becky 2",
//     age: 16,
//     hobby: "coding"
// }

// const familyMembers = [mom, dad, bro, sis];
// console.log(familyMembers)

// const keyToLookUp = "hobby";

// console.log(mom[keyToLookUp]);
// console.log(familyMembers[2].age)

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.


// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.contents);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }
// console.log(empireStateBuilding.stories);
// console.log(empireStateBuilding.height);
// console.log(empireStateBuilding.squareFeet);
// console.log(empireStateBuilding.eastWestLength);
// console.log(empireStateBuilding.northSouthLength);

// const addressKey = "address";
// const dateKey = "constructionDate";
// const costKey = "cost";
// const ownerKey = "owner";
// const architectKey = "architect";

// console.log([empireStateBuilding[addressKey], empireStateBuilding[dateKey], empireStateBuilding[costKey], empireStateBuilding[ownerKey], empireStateBuilding[architectKey]])

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// const newForce = {
//     founded: 2018,
//     instructors: {
//         fullTime: ["Jordan", "Josh", "Kim"],
//     },
//     careerAdvisors: ["Natalie", "Kinsey"],
//     address: "1000 5th Ave, Huntington, WV 25701"
// }
// let le1 = newForce.instructors.fullTime;
// let le2 = newForce.careerAdvisors;

// for(let i=0; i < newForce.instructors.fullTime.length; i++){
//     console.log(le1[i]);
// }
//  for(let i=0; i < le2.length; i++) {
//      console.log("this is the jam", le2[i]);
//  }
// console.log(le1);
// console.log(le2);

// Lightning Exercise 1: Output the names of the instructors to the console.
// Lightning Exercise 2: Output the names of the career advisors to the console.
