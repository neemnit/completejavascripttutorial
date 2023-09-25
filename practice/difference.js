function difference(arr1,arr2){
    const dif=[]
/*if(arr1.includes(1))
return true}*/
//for(let i=0;i<arr2.length;i++){
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            dif.push(arr1[i])
        }
    }




    for(let j=0;j<arr2.length;j++){
    if(!arr1.includes(arr2[j])){
        dif.push(arr2[j])
    
    }
    
}


return dif.toString().split(' ')
}





console.log(difference([1,2,3],[100,2,1,10]))