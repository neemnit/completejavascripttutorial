/*function change(str){
    let str1= str.replace(/([A-Z])/g, ' $1').trim()
        /*else{
            result.push(arr[i])
        }*/
       // return str1
    //}
  // return result

//console.log(change('camelCaseTest'))*/
let str = 'lowerAndUppercase'
console.log(str.replace(/([a-z])([A-Z])/g, '$1 $2'))
//console.log(str)