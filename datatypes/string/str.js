const firstName ='ani'
const msg1 ='hello' , msg2 ='world'
console.log(msg1 +msg2)// string concatenation
console.log(msg1 +' '+msg2)//string concatenation
console.log(firstName[0])//access character via index
console.log(firstName.charAt(0))//access character via index
console.log(firstName.charAt(10))//empty string
console.log(firstName[10])//undefined
const re=firstName.split('').reverse().join('')
console.log(re)