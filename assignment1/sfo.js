function stringFromObject(obj){
    let arr=[]
    for(const key in obj){
        arr.push(`${key} = ${obj[key]} `)
        
    }
    return arr.join(',')




}
console.log(stringFromObject({a:1,b:'z'}))