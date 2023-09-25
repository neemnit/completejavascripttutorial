function capToFront(str){
let small='',cap=''
for(let i=0;i<str.length;i++){
if(str[i]>= 'A' && str[i]<='Z'){
cap+= str[i]
}
else{
small+= str[i]
}
}
return cap.concat(small)
}
console.log(capToFront('hApPy'))