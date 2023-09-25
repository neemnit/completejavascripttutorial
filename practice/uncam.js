function uncamelize(m,s){
let result
for(let i =0;i<m.length;i++){
if (m[i] === m[i].toUpperCase())
result =i
//console.log(result)
console.log(m.slice(0,result) + s +m.slice(result))

//console.log(result1)

}
//console.log(result)
}




console.log(uncamelize('helloWorld',''))
console.log(uncamelize('helloWorld','-'))