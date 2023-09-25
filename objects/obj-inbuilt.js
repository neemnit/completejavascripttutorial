const person ={
 firstName:'john',
 lastName:'doe',
 age:22}
 console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.keys(person).includes('firstName'))
console.log(Object.keys(person).includes('occupation'))
console.log(Object.values(person).includes('doe'))
console.log(Object.values(person).includes(23))
//object freeze
const product ={
 id:1,
 name:'marker',
 price:19
 }
 //console.log(product)
// Object.freeze(product)
// product.price =78
 //product.name ='ani'
// console.log(product)
// console.log(Object.isFrozen(product))
 //object seal
 console.log(product)
 Object.seal(product)
 product.price =98
 product.rating =976

 console.log(product)
 //object assign
 const item ={
 seller:'dev international'}
Object.assign(item,product)
console.log(item)
console.log(Object.entries(product))

