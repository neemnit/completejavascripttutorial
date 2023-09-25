function colourAssociation(arr){
    const result=[]
    for(let i=0;i<arr.length;i++){
        const obj={}
        obj[arr[i][0]]=arr[i][1]
        result.push(obj)

    }
    return result
}
console.log(colourAssociation([['white','goodneess'],['blue','tranquily']]))