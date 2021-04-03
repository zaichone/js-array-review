const scores = [46, 50, 70, 35, 80, 90];
const employees = ['Adam', 'Clint', 'Mito', 'Archy'];

//console.log(scores.includes(80))
//console.log(employees.includes('Adam'))

const someEm = employees.some((person) => person.startsWith('A'));
console.log(someEm);

const everyEm = employees.every((person) => person.startsWith('A'));
console.log(everyEm);

const students = [
    { name: 'John', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 95 }
]
const someStudents = students.some((student) => student.grade >= 95);
console.log("🚀 ~ file: include.js ~ line 20 ~ someStudents", someStudents)
//const someStudents = students.some((student) => student.grade > 90);