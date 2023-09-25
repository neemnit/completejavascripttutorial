function generateHashtag (str) {
    if(str.length>140 ||str.length===0){
        return false
    }
    let arr=str.split(' ')
    let result=[]
    for(let i=0;i<arr.length;i++){
result.push(`${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1).toLowerCase()}`)
    }
    result.unshift('#')
    return result.join('')
}




console.log(generateHashtag('hello there thanks for trying my kata'))

console.log(generateHashtag(''))