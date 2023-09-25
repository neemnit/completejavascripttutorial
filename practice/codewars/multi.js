function getElement(array, indexes) {
    if(indexes.length===2){
    let k=indexes[0]
    let l=indexes[1]
    let result
    //let result=array[0][0]
    for(let i=0;i<array.length;i++){
      for(let j=0;j<=array[i].length;j++){
          if(i===k  && j===l){
              result=array[i][j]
              return result
          }
        }
    }
}
if(indexes.length===1){
    let k=indexes[0]
    let result
    for(let i=0;i<array.length;i++){
       // for(let j=0;j<=array[i].length;j++){
            if(i===k ){
                result=array[i]
                return result
            }
          }
      }
      if(indexes.length===3){
        let k=indexes[0]
        let l=indexes[1]
        let m=indexes[2]
        let result
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].length;j++){
                for(let o=0;o<=array[j].length;o++){
                    if(i===k && j===l && o===m){
                        result=array[i][j][o]
                        return result
                }
                
                }
              }
          }
  
}
}
          

//return result
//return result
          

      //}
   // }
    // good luck
  //}
  console.log(getElement( [[1, 2], [3, 4], [5, 6]], [0,0] ))
  console.log( getElement(['one','two','three'], [2] ))
  console.log(getElement( [[[ 1, 2, 3]]], [ 0, 0, 1 ] )) 