function mergeStrings(a, b) {
    let result=''
    let i=0
    while(i<a.length && i<b.length){
        result+=a[i] +b[i]
        i++
    }
    if(i<a.length){
       // result+=a[i]
       while(i<a.length){
           result+=a[i]
           i++
       }
        
    }
    return result

}
 let str1 = 'bangalore'
 let str2 = 'mysore'
console.log(mergeStrings(str1,str2))