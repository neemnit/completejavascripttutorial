const instructor={name:'elie',job:'instructor'}
 const swap=(obj,name)=>{
const result={}
/*for(const key in obj){
    if(key===name){
        result[obj[key]]= key
    }
    else{
        result[key]=obj[key]
    }
}*/
if(obj.hasOwnProperty(name)){
    result[obj[name]]=name
}
else{
    result[name]=obj[name]
}
return result



}




const result2=(swap(instructor,'name'))
console.log(result2)