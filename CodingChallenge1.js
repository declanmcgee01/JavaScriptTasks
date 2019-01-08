
/*var a = 2;

window.alert(a);
console.log(a);
document.write(a);

function squareNumber(a)
{
    return  a*a;
}

function sumOfNumber(a)
{
    return a+a+a;
}

document.write(squareNumber(a));
document.write(sumOfNumber(a));
*/

/*var person = {
    age: 21,
    name: "Steve",
    occupation: "Police Officer"
};

console.log(person.name);
console.log(person.age);
console.log(person.occupation);

function incrementAge()
{
    person.age++;
    console.log(person.age)
}
*/
var person;

function createPerson()
{
    person = 
    {
        age: document.getElementById("age").value,
        name: document.getElementById("name").value,
        occupation: document.getElementById("occupation").value
    }
    console.log(person);
}


    
