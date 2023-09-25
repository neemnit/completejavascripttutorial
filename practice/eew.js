/*function splicey(arr,num){
    arr.splice(3,0,34)
return arr.length
}*/
var arr=[1,2,3]
//console.log(splicey([1,2,3],12))
function push(a, b) {
    a.splice(a.length-1,0,b)
    return a.length

}
console.log(push(arr,10))