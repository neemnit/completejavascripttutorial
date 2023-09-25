function checkObject(obj,keys){
    let result =false
for(const key in obj){
   // console.log(key,obj[key])
if(key===keys){
    result=true
    break
}



}
return result



}
console.log(checkObject({name:'gokul',city:'bangalore'},'name'))
console.log(checkObject({name:'gokul',city:'bangalore'},'age'))