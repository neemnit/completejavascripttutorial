function greet(){
 const str1='inside functions'
 if(true){//block
    const str2='inside block'
    console.log(str2)
    console.log(str1)

 }
 console.log(str1)
 console.log(str2)
}
greet()
console.log(str2,str1)