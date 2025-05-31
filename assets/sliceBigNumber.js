const fs = require ('fs');

const g = fs.readFileSync('C:/Users/Filip/Desktop/Catalan.txt','utf-8').slice(2,1000002)
const f = fs.writeFileSync('catalan.txt',g)
console.log(g.length)