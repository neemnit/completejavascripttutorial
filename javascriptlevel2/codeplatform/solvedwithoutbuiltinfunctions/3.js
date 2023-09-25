function lastIndexOf(a, b){
    for(let i=a.length-1;i>=0;i--){
        if(a[i]===b){
            return i
        }
    }
    return -1
}
console.log(lastIndexOf([1,2,4,3,4],4))