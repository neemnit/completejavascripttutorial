function uncensor(str1,str2){
    let result=''
    let count=0
    for(let i=0;i<str1.length;i++){
       // for(let j=0;j<str2.length;j++){

        
        if(str1[i]==='*'){
          result+=str2.charAt(count)
          count++
        }
        //  console.log(i)
           //str1[index]=str2[j]
    
    

        else{
            result+=str1[i]
        }
    }
    
    return result
}









console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"))