//build object using foreach method
function builObj(arr){
    const result={}
    arr.forEach(element =>{ 
        result[element]=element.length;

})
return result
}




console.log(builObj(['apple','mago','shilmila','grapes']))