const numbers=[10,20,23,39]
const result =numbers.filter(function(ele){
    
    if(ele%2===0){
        return ele
    }
})
console.log(result)