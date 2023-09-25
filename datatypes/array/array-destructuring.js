/*var numbers =[78,6,34,74,98]
var c2= numbers[3]
var c3= numbers[2]
console.log(c2,c3)*/
//array destructring
const users =['apple','joho','keable','nitish']

//const [u1,u2] = users
//console.log(u1,u2)
const [,,,u1] =users
console.log(u1)
const u2 =users[2]
console.log(u2)
let sharks =["nitishh","suman","neemanit"];
for(let shark of sharks)
{
console.log(shark);
}