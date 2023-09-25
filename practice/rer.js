function reverse(a){
    for(let i=a.length-1;i>=0;i--){
   const result=a.map(function(a){
return a[i]
        })
        return result
    }

}
console.log(reverse([5, 4, 3, 2, 1]));