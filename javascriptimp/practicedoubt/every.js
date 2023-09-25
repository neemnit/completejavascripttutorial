const arr=[1210,141032,110,18073412]
let result=true
/*function everone(ele){
    return ele%2===0
}
const result=arr.every(everone)

console.log(result)*/
/*function callback(ele){
    if(ele%2===0){
        return ele
    }

}*/
function myevery(arr1,callback){
for(let i=0;i<arr1.length;i++){
  result=  callback(arr1[i])
}
 if(!result){
     result=false
    // return result
 }
return result

}
function callback(ele){
    return(ele%2===0)
        
    
}


console.log(myevery(arr,callback))