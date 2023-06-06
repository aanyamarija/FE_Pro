// 1.

const students = [];

students.push({ name: 'Maria', age: 19, course: 'Math' });
students.push({ name: 'Oscar', age: 21, course: 'Sport' });
students.push({ name: 'Bob ', age: 23, course: 'Music' });
students.push({ name: 'Mark ', age: 27, course: 'Geometry' });


console.log(students);

// 2.

const studentName = students[2];

console.log (studentName.name);

//3.

const changeAge = students[0];
changeAge.age = 26;

console.log(changeAge.age);

//4.

const studentLocation = students[3];
studentLocation.city = "London";
console.log(studentLocation);

//5.

students.forEach((student) => {
    console.log(student.name);
});
