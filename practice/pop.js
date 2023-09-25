function pop(a) {
    if (a.length === undefined) {
        return undefined
    } else {
       let result=  a.splice( a.length - 1,1)
        return (typeof result)
    }
    

}
console.log(pop([2,3,4,5]))
console.log(pop([]))