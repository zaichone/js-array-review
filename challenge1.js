const students = [
    { name: 'John', grade: 75 },
    { name: 'Jane', grade: 93 },
    { name: 'Samantha', grade: 90 },
    { name: 'Michael', grade: 94 }
]

//Sort by grade
const topGrade = students.sort((a,b) => b.grade - a.grade);
console.log('students', students);
const leastGrade = [...topGrade]
leastGrade.reverse();
console.log("🚀 ~ file: challenge.js ~ line 11 ~ leastGrade", leastGrade)
console.log("🚀 ~ file: challenge.js ~ line 10 ~ topGrade", topGrade)


//console.log('reversed', topGrade.reverse());
const overNinety = leastGrade.find((item) => item.grade > 90);
console.log("🚀 ~ file: challenge.js ~ line 19 ~ overNinety", overNinety)
