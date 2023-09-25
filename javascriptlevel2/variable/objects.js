let a =[10]
let b=['apple']
console.log('a',a)
console.log('b',b)
//copy reference of a into c 
let c=a
console.log('a',a)
console.log('c',c)
a.push(20)
console.log('a',a)
console.log('c',c)
c.push(30)
console.log('a',a)
console.log('c',c)