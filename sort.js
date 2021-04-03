const scores = [46, 50, 70, 35, 80,90];
console.log("🚀 ~ file: sort.js ~ line 2 ~ scores", scores.sort())

const sortedScores = scores.sort((a,b) => a-b);
console.log("🚀 ~ file: sort.js ~ line 4 ~ sortedScores", sortedScores)

const sortedScoresHighest = scores.sort((a,b) => b-a);
console.log("🚀 ~ file: sort.js ~ line 7 ~ sortedScoresHighest", sortedScoresHighest)
