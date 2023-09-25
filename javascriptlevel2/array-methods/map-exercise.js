/*const number=[10,15,20,25]
function add(ele){
    return ele+2
}
//add 2 to every element in the array
//output:[12,17,22,27]
const result=number.map(add)
    

console.log(result)
function even(ele){
    return(ele%2 ===0)?ele+2:ele+3

}
//add 2 to even number and 3 to odd number
//output[12,18,22,28]
const result2=number.map(even)
console.log(result2)
//add 5 only if number is even
function five(element){
    return (element%2===0)?element+5:element
}
console.log(result3=number.map(five))*/
const fruits=['apple','grapes','orange']
const result4=fruits.map(function(obj){
return {[obj]:obj.length}
})
console.log(result4)
console.log({name:'t'})


