function stringFromObject(obj){
    let convert=[]
for(const key in obj){
    const str = `${key} = ${obj[key]}`

    convert.push(str)
    //convert.split(' ').join(',')
}

//return convert.slice(0,convert.length-1)//.split(' ').join(',')
return convert.join(', ')

}
console.log(stringFromObject({a:1,b:'z'}))
console.log(stringFromObject({name:'Elie',job:'instructor',isCatowner:false}))