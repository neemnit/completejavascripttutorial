function alt(str){
    result=true
    //i=0
   for(let i=0;i<str.length-1;i++){
   //while(i<str.length-1){
        if(str[i]===str[i].toLowerCase()){
            if(str[i+1]===str[i+1].toUpperCase()){
            i++
            }else{
                result=false
                break
            }
        }else{
            if(str[i+1]===str[i+1].toLowerCase()){
                i++
            }else{
                result=false
                break
            }
        }
    }
    return result



}
console.log(alt('AaAaAaA'))