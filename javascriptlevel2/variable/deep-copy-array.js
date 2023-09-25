let a =[10]
let b=[23]
//let c=a.slice(0)//DEEP COPY METHOD1
//console.log('a',a)
//console.log('c',c)
//a.push(20)
//console.log('a',a)
//console.log('c',c)
//DEEP COPY METHOD 2
let c=[].concat(a,b)
console.log('a',a)
console.log('c',c)
a.push(20)
console.log('a',a)
console.log('c',c)
//let c=[...a,b]
console.log('a',a)
console.log('c',c)
a.push(20)
console.log('a',a)
console.log('c',c)