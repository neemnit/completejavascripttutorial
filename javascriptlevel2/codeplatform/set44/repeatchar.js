function nonRepeatedChar(a) {
    let result=''
   // for (let i = 0; i < a.length; i++){
       a.split('').forEach(function(ele){
        if (a.indexOf(ele) === a.lastIndexOf(ele)) {
            result = ele
           // break
        }
    })
    return result
}
console.log(nonRepeatedChar('abacddbec'))