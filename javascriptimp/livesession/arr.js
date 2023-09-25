const players=['dhoni','shehwag','virat']
const result=players.map(function(ele){
    return(ele.toUpperCase())
})
console.log(result)
const numbers=[10,15,20,25,30]
console.log(numbers.includes(20))
console.log(numbers.indexOf(20)>=0)
//find the first element greater than 15
const result2=numbers.find(function(le){
    return le>15
})
console.log(result2)