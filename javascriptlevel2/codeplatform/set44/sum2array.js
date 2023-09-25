function sumTwoArrayIndexes(a,b){
    let result=[]
    i=0
    while(i<a.length && i<b.length){
        result.push(a[i]+b[i])
        i++
    }
    if(i<a.length){
        while(i<a.length){
            result.push(a[i])
            i++
        }
    }
    if(i<b.length){
        while(i<b.length){
            result.push(b[i])
            i++
        }
    }
    return result

}
const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];
console.log(sumTwoArrayIndexes(array1,array2))