function key(obj){
let result =[]
for(const ke in obj){
result.push(ke)


}
   return result

}
console.log(key({a:1,b:2,c:3}))

console.log(key({first:'lamba',last:'lance'}))