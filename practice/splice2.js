var arr=['a','b','c']
var emptyarray=[]
function shift(a) {
    if (a.length == 0) {
        return undefined
    }
    let result =a.splice(0,1).toString()
return result

}
console.log(shift(arr))
console.log(shift(emptyarray))