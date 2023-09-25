function reverse(a) {
    let res=[]
    while(a.length){
        res.push(a.pop())
    }
    return res
}
   // return result
   // return a
    //let result=[]
    /*for(let i=a.length-1;i>=0;i--){
        //a.pop(a[i])
        a.push(a[i])
    }
return a.map(function(ele){
    return ele
})*/

  /* return  a.map(function(ele){
       return ele
    })*/

console.log(reverse([1,2,3,4,5]))