function findMissingLetter(array)
{
    let result=''
    let alpha='abcdefghijklmnopqrstuvwxyz'
    alpha=alpha.split('')
    let str=array[0]
let arr=alpha.indexOf(str)
let str2=alpha.slice(arr)
for(let i=0;i<str2.length;i++){
    if(!array.includes(str2[i])){
        result=(str2[i])
       // result.
        break
    }
}
return result
}


console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['r','s','t','v']))
console.log(findMissingLetter(['o','q','r','s']))

/*function findMissingLetter(array)
{
    let result=''
    let alpha='abcdefghijklmnopqrstuvwxyz'
    alpha=alpha.split('')
    let str=array[0]
let arr=alpha.indexOf(str)
let str2=alpha.slice(arr)
for(let i=0;i<str2.length;i++){
    if(!array.includes(str2[i])){
        result=(str2[i])
       // result.
        break
    }
}
return result
}*/
