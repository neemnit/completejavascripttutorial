function key(obj){
let result =''
for(const ke in obj){
let str= `${ke}, `
result+=(str)


}
   return result.trim().split(",")

}
console.log(key({a:1,b:2,c:3}))

console.log(key({first:'lamba',last:'lance'}))