function dash(str){
  let arr=[str[0]]
  for(let i=1;i<=str.length;i++){
    if(str[i-1]%2===0 && str[i]%2===0){
      arr.push('-',str[i])
    }
    else{
      arr.push(str[i])
    }
  }
return arr.join('')

//return result
   
}  


const resulte=dash('0234654678')//0-234-654-678
console.log(resulte)