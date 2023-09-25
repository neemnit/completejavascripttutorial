function alphabetPosition(text) {
    let str=text.split(' ').join('')
let str1=''
let count=[]
let alpha='abcdefghijklmnopqrstuvwxyz'
for(let i=0;i<str.length;i++){
    if(alpha.includes(str[i].toLowerCase())){
  str1+=str[i].toLowerCase()
  
}
}
for(let i=0;i<str1.length;i++){
    
        count.push(alpha.indexOf(str1[i])+1)
    }
    return count.join(' ')
    }

      




  





  console.log(alphabetPosition("The sunset sets at twelve o' clock."))