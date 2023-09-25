let str='dctacademy'
let st=''
/*for(let i=0;i<str.length;i++){
    if(!(str[i]=='a'||str[i]=='e'||str[i]=='o'||str[i]=='u'||str[i]=='i')){
        st+=str[i]
    }
    
        
    
}*/
//console.log(st)
let arr=str.split('')
console.log(arr)
const result=arr.filter((str1)=>{
    if(!(str1=='a'||str1=='e'||str1=='o'||str1=='u'||str1=='i')){
      return  str1
    }

    
    })
    console.log(result.join(''))
    
    

