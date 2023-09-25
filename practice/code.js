/*function slice(a, b, c) {
    let result=[]// [1, 2]
    if(b<=a.length-1 && c<=a.length-1){
        for(let i=b;i<c;i++){
            result.push(a[i])
        }
        return result
    }

    //return result
  else if(c===undefined ){
       for(let i=b;i<=a.length-1;i++){
       result.push(a[i])
   } return result
}


else  if(c>a.length){
       for(let i=b;i<a.length;i++){
       result.push(a[i])
   }
}
   return result


}*/
function slice(a,b,c){
    let res = []
    if (c === undefined || c > a.length) {
        c = a.length
    }
    for (let i = b; i < c; i++){
        res.push(a[i])
    }
    return res
}


   console.log(slice([1, 2, 3, 4, 5], 0, 2))
  console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]

console.log(slice([1, 2, 3, 4, 5], 2, 10));



