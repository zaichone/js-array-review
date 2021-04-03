const scores = [46, 50, 70, 38, 80, 90];


const bonusScores = scores.map((score, i) => { return {id:i, scores:score+5}; });
//console.log("🚀 ~ file: all.js ~ line 2 ~ scores", bonusScores)

const friends = [{firstName:'Clark', lastName:'Queen'},{firstName:'Neo', lastName:'Larren'}, {firstName:'Max', lastName:'Larren'}];

const fullName = friends.map((friend) => `${friend.firstName} ${friend.lastName}`)
//console.log("🚀 ~ file: all.js ~ line 8 ~ fullName", fullName)

const friendsMore = friends.map((friend, i) => { return {id:i, firstName:friend.firstName, lastName:friend.lastName, fullName:friend.firstName+' '+friend.lastName}})
//console.log("🚀 ~ file: all.js ~ line 13 ~ friendsMore", friendsMore)


//Filter
const selectFriend = friends.filter((friend) => friend.lastName === 'Larren')
console.log("🚀 ~ file: all.js ~ line 20 ~ selectFriend ~ selectFriend", selectFriend)

const filterFriends = friends.filter((friend) => { return friend.lastName === 'Larren'});
console.log("🚀 ~ file: all.js ~ line 21 ~ filterFriends", filterFriends)


//Reduce
const sales = [...scores];
console.log("🚀 ~ file: all.js ~ line 26 ~ sales", sales)
const totalSales = sales.reduce((total, amount) => total/amount);
console.log("🚀 ~ file: all.js ~ line 27 ~ totalSales", totalSales)


//Flat + map
const employees = ['Adam', 'Clint', 'Mito', 'Archy'];

const doubleScores = scores.flatMap((value) => [value*3]);
console.log("🚀 ~ file: all.js ~ line 34 ~ doubleScores", doubleScores)
