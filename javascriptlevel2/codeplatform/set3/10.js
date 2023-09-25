function fizzBuzz(a) {
    let str = ''
    if(a%15===0){
        str='FizzBuzz'
    }
    else if (a % 3 === 0) {
        str= 'Fizz'
    }
    else if (a % 5 === 0) {
        str= 'Buzz'
    }
    /*else if (a %3=== 0 && a%5===0) {
        str= 'FizzBuzz'
    }*/
    
        return str

//type code here
}
console.log(fizzBuzz(12))

console.log(fizzBuzz(110))

console.log(fizzBuzz(225))

console.log(fizzBuzz(11))