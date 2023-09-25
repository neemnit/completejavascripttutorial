function rangeBetween(number1,number2){
    let arr=[]
while(number1<=number2){

arr.push(number1)

number1++

}
return arr
}
console.log(rangeBetween(4,7))
console.log(rangeBetween(-4,7))