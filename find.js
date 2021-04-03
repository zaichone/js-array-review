const employees = ['Adam', 'Clint', 'Mito', 'Archy'];
const scores = [46, 50, 70, 35, 80, 90];


const underFifty = scores.find((element) => element == 70);
console.log("🚀 ~ file: find.js ~ line 4 ~ underFifty", underFifty)

const underFiftyIndex = scores.findIndex((element) => element == 70);
console.log("🚀 ~ file: find.js ~ line 8 ~ underFiftyIndex", underFiftyIndex)
