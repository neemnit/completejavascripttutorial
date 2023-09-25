function big(m){
let result = m.split(' ')
//let arr =['fruit','mind','nitish']
let max =0
let str=0
for(let i =0;i<result.length;i++){
if(max<result[i].length)
max=result[i].length
str =result[i]

}
return str
}
//console.log(max,str)
console.log(big('fruit mind nitish'))
