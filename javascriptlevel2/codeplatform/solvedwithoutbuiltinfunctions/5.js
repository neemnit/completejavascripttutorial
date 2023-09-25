let arr=[1,2]
function push(a, b) {
    a.splice(a.length - 1, 0, b)
    return a.length

}
console.log(push(arr,10))