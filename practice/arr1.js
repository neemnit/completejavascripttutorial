let arr =['apple','mango','papaya','grapes']
const mixed=['nitish',7,true,[10],{name:'gaurav'},undefined]
console.log(mixed.length)

console.log(arr.slice(0,3))
let sl = arr.slice(3)
console.log(sl)
console.log(arr.length)
console.log(arr.splice(1,1))
console.log(arr)
arr.splice(1,0,'pencil','eraser')
console.log(arr)
for(let i =0;i<arr.length;i++)
{
console.log(arr[i])
}
const user =['john','nitish','werta','wet']
// array destructuring feateatrue es6
//const[u1,u2] =user
//console.log(u1,u2)
const u3 =user[3]
console.log(u3)
const[,,,u1]=user
console.log(u1)
console.log(user[0])
console.log(user.length)
let nestedarray =[['salman','khan','sushant'],['coral','reer','cricket']]
console.log(nestedarray[0][1])
let sharks=['nitishkumar','tiger','hammerhead']
for(let [index,shark]of sharks.entries()){
console.log(index,shark)
}


