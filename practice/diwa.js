let arr=[12,23,43]
function search(arr,num){
    let result=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            result=true
        }
       // return true
    }
    return result
}
console.log(search(arr,12))