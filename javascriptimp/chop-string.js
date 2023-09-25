function stringChop(str,n){
const result =[]
for(let i=0;i<str.length;i+=n){
    const substr=str.slice(i,i+n)
    result.push(substr)

}
return result
}
console.log(stringChop('resource',2))