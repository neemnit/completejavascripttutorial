function cap2(str){
    let result=''
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            result+=str[i]
        }
    }
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
            result+=str[i]
        }
    }
    return result
}
console.log(cap2('dDGEr'))