function capitalize_words(m){
 //let result = m.split(' ')
// let result1 =''
 //for(let i =0;i<result.length;i++){
 //if(result[i].charAt(0))
// result1 += result[i].charAt(0).toUpperCase() + result[i][++i]



 //let //result1 += result[i][i].toUpperCase()
//else

//result1 += result[i].charAt(i).toLowerCase()
return m.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
}




console.log(capitalize_words('js string excercises'))