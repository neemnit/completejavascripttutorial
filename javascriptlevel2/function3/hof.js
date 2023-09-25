const numbers=[10,15,20,25,30]
//foreach
/*numbers.forEach(function(ele){
    console.log(ele)
})*/
//myforeach

/*function myforEach(arr,callback){//hof
    
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}
myforEach(numbers,function(n){//callback
    console.log(n)
})*/
//myforeach
function myforEach(arr,callback){
for(let i=0;i<arr.length;i++){
  ( callback(arr[i]))
}
   // console.log(arr,callback)
}
myforEach(numbers,function(n){
   console.log(n)
})
/*function myforEach(arr,callback){
    console.log(arr,callback(2))
    
}
myforEach(numbers,function(n){//callback

    
    return n
})*/
/*function myforEach(arr,callback){
    console.log(arr,callback(2))
}
myforEach(numbers,function(n){
    return(n)
})*/
//myfilter
/*function myfilter(arr,callback){
    const result=[]
    for(let i=0;i<arr.length;i++){
        const bool=callback(arr[i])
        if(bool){
            result.push(arr[i])
        }
    }
    return result
}const result=myfilter(numbers,function(n){
    return n%2===0
})
console.log('even only',result)*/
