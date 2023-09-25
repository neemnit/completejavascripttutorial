function includes(a, b) {
    let result=false
    for(let i=0;i<a.length;i++){
        if(a[i]===b){
            result=true
        }
    }
    return result
}
console.log(includes([1,2,3,4],4))
console.log(includes([],4))
console.log(includes([1,2,3,14],14))