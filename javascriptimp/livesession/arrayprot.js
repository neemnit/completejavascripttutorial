Array.prototype.dctForeach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}
const fruits=['apple','mango','kiwi','banana']
fruits.dctForeach(function (ele,i,arr){
    console.log(ele,i,arr)
})
Array.prototype.first=function(){
    let result=''
    result=this[0]
    return result
}
console.log(fruits.first())
Array.prototype.last=function(){
    let result=''
    result=this[this.length-1]
    return result
}
console.log(fruits.last())
Array.prototype.mymap=function(){
    let result=[]
    for(let i=0;i<this.length;i++){
    result.push(this[i].toUpperCase())
    }
    return result
}
console.log(fruits.mymap())