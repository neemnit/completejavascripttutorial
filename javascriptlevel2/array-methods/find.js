const prices=[2,20,3,40,100]
const fess=[23,40,100,32,12]
//predicate function-function that return true or false
fess.forEach(function(element){
const result=prices.find(function(ele){
   return ele=== element})
    if(result){console.log('pass')}
        else{console.log('fail')}
        //return ele>20
   // }
})
//console.log(result)
//console.log(prices[1])