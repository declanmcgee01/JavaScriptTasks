"use strict";
/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

//LEVEL 1 - BASIC

//VARIABLES
var a = 2;

window.alert(a);
console.log(a);
document.write(a);

//FUNCTIONS 1
function squareNumber(a) {
    return a * a;
}

//FUNCTIONS 2
function sumOfNumber(a) {
    return a + a + a;
}

document.write(squareNumber(a));
document.write(sumOfNumber(a));

//VARIABLES 2
var person = {
    age: 21,
    name: "Steve",
    occupation: "Police Officer"
};

console.log(person.name);
console.log(person.age);
console.log(person.occupation);

function incrementAge() {
    person.age++;
    console.log(person.age)
}


//FUNCTIONS 3/EVENTS 1 & 2
var person;

function createPerson() {
    person = 
    {
        age: document.getElementById("age").value,
        name: document.getElementById("name").value,
        occupation: document.getElementById("occupation").value
    }
    console.log(person);
}

//STRINGS 1
var string = "He said My name is Elliot";
var capitalWord = string.toLocaleUpperCase();

console.log(string);
console.log(capitalWord);

//STRINGS 2
var arg1 = "Number 5: ";
var arg2 = 5;

var result = arg1.concat(arg2);
console.log(result);

//ARRAYS 1/ STRINGS 3
var numbers = ["One", "Two", "Three"];
console.log(numbers);
numbers.push("Four");
console.log(numbers);
numbers.pop();
console.log(numbers);

//CONDITIONALS 1
function checkAge(){
if (person.age >=20 && person.age <= 40){
    console.log(true);
}else{
    console.log(false);
}
}

//ITERATION 1 & 2
for(let i = 0; i <= 10; i++)
{
    if(i%2 == 0){
        console.log(i);
    }else{
        console.log("NOTHING");
    }
}

//LEVEL 2 - INTERMEDIATE

//ITERATION 3 - FIZZBUZZ
function fizzBuzz(arg1, word1, word2, word3){
for(let i = 0; i <=arg1; i++){
    if(i%15 == 0){
        console.log(word3);
    }else if(i%3 == 0){
        console.log(word1);
    }else if(i%5 == 0){
        console.log(word2);
    }else{
        console.log(i);
    }
}
}

fizzBuzz(100, "FIZZ", "BUZZ", "FIZZBUZZ");

//ITERATION 4
function divisibleByThree(num){
    var counter = 0;
    while(num != 1)
    if(num%3 == 0){
        num = num/3;
        counter++;
        console.log("Divided by 3");
    }else if((num+1)%3 == 0){
        num++;
        counter++;
        console.log("Added 1 to Number");
    }else if((num-1)%3 == 0){
        num--;
        counter++;
        console.log("Subtracted 1 from Number");
    }
    console.log("Number is now 1");    
    console.log("Iterations:" + counter);   
}

divisibleByThree(67);

// STRINGS 4
var str = "xxxabyyyycd";

function tripleCounter(str){
var counter = 0;
for(let i = 1; i < str.length; i++){   
    if(str.charAt(i) == str.charAt(i-1) && str.charAt(i) == str.charAt(i+1)){
        counter++;
    }
}
console.log(counter);
}

tripleCounter(str);

//DOM
function createPara(){
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("createPara");
element.appendChild(para);
}

//JSON 1
function superheroes(){
var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json ';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function () {
var superHeroes = request.response;

let squadName = document.querySelector("#squadName");
squadName.innerHTML = superHeroes.squadName;
let homeTown = document.querySelector("#homeTown");
homeTown.innerHTML = superHeroes.homeTown;
let formed = document.querySelector("#formed");
formed.innerHTML = superHeroes.formed;
let secretBase = document.querySelector("#secretBase");
secretBase.innerHTML = superHeroes.secretBase;

//var para = document.createElement("pre");
//para.textContent = requestData['squadName'];
//document.getElementsByTagName('body')[0].appendChild(para);
//var node = document.createTextNode(superHeroes);
//para.appendChild(node);
//var element = document.getElementById("div1");
//element.appendChild(para);
}
}









    
