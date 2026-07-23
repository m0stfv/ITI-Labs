// Part 1 - Choose
// 1-Array 
// 2-find()
// 3-Array 
// 4-undefined
// 5-Arrays
// Part 2 - True or False
// 1-False
// 2-True
// 3-True
// 4-True
// 5-False
// -----------------
// Part 3 - Complete the following
// ---------------------
// Q1
const numbers = [1, 2, 3, 4];
numbers.map((num) => {
    console.log(num * 2);
});

// Q2
const nums = [10, 25, 5, 30, 15, 40];
const result = nums.filter((num) => {
    return num > 20;
});
console.log(result);

// Q3
const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];
const user = users.find((item) => {
    return item.age > 25;
});
console.log(user);

// Q4
const names = ["ali", "mona", "ahmed"];
const result4 = names.map((name) => {
    return name.toUpperCase();
});
console.log(result4);
// --------------------------------
// Part 4 - To Do
// --------------------------------
const fruits = ["Apple", "Banana", "Orange"];

// 1) for...of
for (let fruit of fruits) {
    console.log(fruit);
}

// 2) for...in
for (let index in fruits) {
    console.log(index);
}

// 3) forEach
fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});
// ---------------------
// Part 6 - Many Q
// ---------------------
const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

const names = students.map((student) => student.name);
console.log(names);
const passed = students.filter((student) => student.degree >= 60);
console.log(passed);
const topStudent = students.find((student) => student.degree > 90);
console.log(topStudent);
students.forEach((student) => {
    console.log(student.name);
});
