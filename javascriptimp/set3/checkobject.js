function checkObject(obj,keys){
    let result =false
//for(const key in obj){
   // console.log(key,obj[key])
   if(obj.hasOwnProperty(keys)){
//if(key===keys){
    result=true
   // break
}



//}
return result



}
console.log(checkObject({name:'gokul',city:'bangalore'},'ne'))
console.log(checkObject({name:'gokul',city:'bangalore'},'targe'))
console.log(checkObject({name:'saching',profession:'cricket'},'profession'))