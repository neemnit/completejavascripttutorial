function entries(a) {
    let result=[]
   // let result2=''
    for (const key in a) {
       // let result=[]
      result.push([key,a[key]])
      //return result2
    }
    return result

}
var obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj))