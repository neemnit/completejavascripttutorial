function stringchop(str,n){
let result=[]
for(let i=0;i<str.length;i+=n)
{
    let substr=str.slice(i,i+n)
    result.push(substr)
}
return result

}



console.log(stringchop('resource',2))