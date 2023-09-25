const fruits =['apple','mango','kiwi','banana']
console.log(fruits)
console.log(fruits.splice(2,1))//remove elements from index
console.log(fruits)
console.log(fruits.splice(1,1))
// add elemnts at specific index
const products =['marker','scale','Board','rack']
for(let i=0;i<products.length;i++){
 // if(products[i]===products[i].charAt(0).toUpperCase()){
    products.splice(2,0,8)
  //}
}
  
  console.log(products)
