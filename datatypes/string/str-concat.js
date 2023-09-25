const source ='bangalore',destination ='mysore',distance =140,duration ='3 hours 30 mins'
// the distance between bangalore and mysore is 140kms and the time taken to travel  is 3 hours 30 mins.
//es5
console.log('the distance between '+source+' and '+destination+' is '+distance+' kms and the time taken to travel is '+duration+'.')
//es6-template literal
console.log(` the distance between ${source} and ${destination} is ${distance} kms and the time taken to travel  is ${duration} .`)
const word ='javascript'
console.log(word)
console.log(word[0])
console.log(word[2])
console.log(word[23])
console.log(word.charAt(24))
console.log(word.slice(2,5))
