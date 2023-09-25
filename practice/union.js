function union(arr1,arr2){
    const result=[]
    const union=[]
    const double=[]
    const s=[]
    for(let i=0;i<arr1.length;i++){
        result.push(arr1[i])
    }  
    for(let j=arr2.length-1;j>=0;j--){
        result.push(arr2[j])
    }
    for(let i=0;i<result.length;i++){
        if(result.indexOf(result[i])===result.lastIndexOf(result[i])){
        union.push(result[i])
        }else{
            double.push((result[i]))
        }
    }
    for(let i=0;i<double.length;i++){
        if(double.indexOf(double[i]!=double.lastIndexOf(double[i]))){
            s.push(double.lastIndexOf(double[i]))
        }
    }
    console.log(s)
    //return result

/*for(let j=result.length-1;j>=0;j--){
    
     if(!arr2.includes(result[j])){
       // console.log('g')
    result.push(arr2[j])
}

}*/
//eturn result
}


console.log(union([1,2,3],[100,2,1,10]))