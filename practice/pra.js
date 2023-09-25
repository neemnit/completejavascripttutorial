function string_parameterize(m){
let result =''
for(let i =0;i<m.length;i++){
 result += m.toLowerCase()
 return result.replace(/ /gi,'-')

//return result
}
//return result

}





console.log(string_parameterize('Robin Singh from USA'))