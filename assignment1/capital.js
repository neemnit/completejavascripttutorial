function capitalizewords(str){
 const arr= str.split(' ')
 let result=[]
 for(let i=0;i<arr.length;i++){
   result.push( arr[i].charAt(0).toUpperCase() +arr[i].slice(1).toLowerCase())
 }
 return result.join(' ')

}

console.log(capitalizewords('js string exercises'))