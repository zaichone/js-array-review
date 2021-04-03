const students = [
    { name: 'John', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 }
]
console.log("🚀 ~ file: challengeStackAndQueue.js ~ line 7 ~ students", students)

//Remove the last item from array
const reduceStudents  = [...students];
reduceStudents.pop();
reduceStudents.shift();
console.log("🚀 ~ file: challengeStackAndQueue.js ~ line 11 ~ reduceStudents", reduceStudents)
//Remove the first item in the array

//Add another one to the array
const incresedStudents = [...students];
incresedStudents.push({name:'Luke', grade:80})
console.log("🚀 ~ file: challengeStackAndQueue.js ~ line 17 ~ incresedStudents", incresedStudents)

incresedStudents.unshift({name:'Nick', grade:70})
console.log("🚀 ~ file: challengeStackAndQueue.js ~ line 21 ~ incresedStudents", incresedStudents)
