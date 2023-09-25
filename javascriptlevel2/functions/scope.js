const str1='outside functions'//global
function greet(){ //functions
    const str2='inside functions'
    console.log('str2',str2)//inside functions
    console.log('str1',str1)//outside functions


}
greet()
console.log('str1',str1)//outside functions
console.log('str2',str2)