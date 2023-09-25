function addBinary(a,b) {
let num=a+b
let rem=''
while(num>0){
     rem+=num%2
let div=num/2
num=Math.floor(div)

}
//const addBinary = (a, b) => (a + b).toString(2);
return (rem.split('').reverse().join(''))
}





/*let rem=''
while(num>0){
     rem+=num%2
let div=num/2
num=Math.floor(div)

}
console.log(rem.split('').reverse().join(''))*/
console.log(addBinary(3,9))