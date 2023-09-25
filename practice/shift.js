/*var arr = ["a","b","c"];
var arr=[]*/
 function shift(arr){
     if(arr.length===undefined){
         return undefined
     }
     else{
         let result=arr[0]
     
     return result }
 }
 console.log(shift(['a','d','d']));
 console.log(shift([])) // "a"