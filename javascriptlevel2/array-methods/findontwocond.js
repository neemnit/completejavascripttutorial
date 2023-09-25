const numbers=[10,23,15,24,30]
const result =numbers.find(function(ele){
    return ele>20 && ele%2===0
})
console.log(result)