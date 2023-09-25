function stringFromObject(obj){
let result =[]
for(const key in obj){
result.push(`${key} = ${obj[key]}`)
//console.log(key)


}
return result.join(',')

}


console.log(stringFromObject({a:1,b:2}))
/*const furits=['apple','anana','papaya']
console.log(furits.join(','))*/