function strWeight(str1,str2)
{
    let alphabets='abcdefghijklmnopqrstuvwxyz'
let strcount1=0,strcount2=0,result
//if(str1===str2)
//return 'equal'
for(let i=0;i<str1.length;i++){
strcount1+=alphabets.indexOf(str1[i]+1)
}
for(let j=0;j<str2.length;j++){
    strcount2+=alphabets.indexOf(str2[j]+1)
}
if(strcount1 == strcount2)
return true
else if(strcount1>strcount2)
return 1
else if(strcount2>strcount1)
return 2


}
console.log(strWeight('batman','tamanb'))