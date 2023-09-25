function builObj(arr){
    let result={}
    for(let i=0;i<arr.length;i++){
        result[arr[i]]=arr[i].length
    }
    return result

}




console.log(builObj(['apple','mango']))