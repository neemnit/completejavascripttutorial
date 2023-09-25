/*function fun1(){
    
    let first=230
    //console.log(e)
    return first
}
let result
console.log(result)
function vun(){
    let second=23
let access=fun1('ani')
   console.log(

}
arr.forEach(print)*/
//polluting the global scope
 /*let name='myso'
function place() {
   let name='mysore'
    console.log(name)
}   
place()
console.log(name)*/
function f1(){
    let n=10
    return n
}
//const result=f1()
function f2(){
    const result=f1()
    console.log(result)
}
f2()