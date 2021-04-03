const scores = [46, 50, 70, 38, 80, 90];

const includeSeventy = scores.includes(70);
console.log("🚀 ~ file: challengeEvaluate.js ~ line 3 ~ includeSeventy", includeSeventy)

const undereSeventy = scores.some((score) => score < 70)
console.log("🚀 ~ file: challengeEvaluate.js ~ line 6 ~ undereSeventy", undereSeventy)

const allEven = scores.every((score) => score%2 === 0)
console.log("🚀 ~ file: challengeEvaluate.js ~ line 9 ~ allEven", allEven)
