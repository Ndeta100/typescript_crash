"use strict";
//Basic types 
let id = 5;
let company = "Ndeta Innocent";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
//Tuple
let person = [1, 'Ndeta', true];
//Tuple array
let employee;
employee = [
    [1, 'Ndeta'],
    [2, "Romance"]
];
//Unions
let pid;
pid = 9;
//Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'John'
};
//Type assertion
let cid = 1;
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 67));
const user2 = {
    id: 43,
    name: 'Ndeta'
};
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ndeta = new Person(1, "Innocent");
ndeta.register();
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['Ndeta', 'Romance', 'John']);
console.log("ID", id);
