function removeElements(arr,number){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===number){
            arr.splice(i,1)
            return arr
        }
        
    }
    if(!arr.includes(number)){
        return `${number} is not present in the array`
    }
   // return arr

}


console.log(removeElements([2,5,9,6],5))
console.log(removeElements([2,5,15,9,6],15))