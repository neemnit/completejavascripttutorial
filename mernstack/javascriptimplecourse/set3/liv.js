function colourAssociation(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        const obj = {}
       // const key = arr[i][0], prop = arr[i][1]
        obj[(arr[i][0])] = arr[i][1]
      result.push(obj)
        
        //console.log(result[obj[key]])
    }
    return result 
}
console.log(colourAssociation([['white','goodness'],['blue','tranquilty']]))