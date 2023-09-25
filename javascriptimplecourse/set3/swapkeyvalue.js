function swapKeyAndValue(obj,str){
const result={}
for(const key in obj){
if(key === str){
result[obj[key]] =key
//console.log(result)

}
else{
    result[key]=obj[key]
   // console.log(result)
}

}

return result
}
const instructor ={name:'Elie',job:'Instructor'}
console.log(swapKeyAndValue(instructor,'name'))