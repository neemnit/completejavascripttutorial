const fruit =['mango','apple','watermelon']
//console.log(fruit)
//console.log(fruit[0])
//console.log(fruit[18])
//console.log(typeof fruit)
//methods which demosntrat the mutable nature of object

console.log(fruit)
console.log(fruit.push('kiwi'))
fruit.pop()
console.log(fruit)
console.log(fruit.pop())
fruit.unshift('banana')
console.log(fruit.unshift('banana'))
console.log(fruit)
console.log(fruit.shift())
console.log(fruit)
const numbers=[87,90]
numbers.push(889,765,65)
console.log(numbers)
numbers.unshift(1,2,3)
console.log(numbers)
console.log(numbers.reverse())
console.log(fruit.sort())
console.log(fruit)
const players =['sachin','virat','sehwag']
console.log(players.indexOf('virat'))
console.log(players.indexOf('yuvraj'))
console.log(players.lastIndexOf('virat'))
console.log(players.includes('virat'))
console.log(players.includes('dhoni'))
//array to string
console.log(players.join(' '))
const set1 =[89,8] ,set2 =[65,8]
console.log(set1 + set2)
console.log(set1.concat(set2))

console.log(set1)