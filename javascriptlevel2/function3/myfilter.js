const numbers=[10,23,45,60,34]
/*const result=numbers.filter(function(ele){
    return ele%2===0

})
console.log(result)*/
/*const result=numbers.filter(ele=>ele%2===0)
console.log(result)*/
const result=[]
function myfilter(arr,callback){
   // console.log(callback)
    for(let i=0;i<arr.length;i++){

      let bool=  callback(arr[i])
        if(bool){
            result.push(arr[i])
        }
    }
    return result

}


const filter=(myfilter(numbers,function(ele){
   return (ele%2)==0

}))
console.log(filter)