ll capitalize_Words(m){
let result =''
for(let i =0;i<m.length;i++){
if(i == 0 && m[i]!=' ')
result += m[i].toUpperCase()
else if(i==0 && i ==' ')

result += m[++i].toUpperCase()
else
result += m[i].toLowerCase()

}
return result
}


console.log(capitalize_Words('js string exercises'))