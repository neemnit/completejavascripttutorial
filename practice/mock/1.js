const str='dctacademy'
/*const arr=str.split('')
const result=[]
for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i]===arr.lastIndexOf(arr[i]))){
      console.log(  arr.splice((i),1))
     // console.log(  arr.splice(arr.lastIndexOf(i),1))
    }

    }*/
    function firstNotRepeatingCharacter(s) {
      let str=''
      for (let i = 0; i < s.length; i++) {
          if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
              str+= s.charAt(i)
          }
      }
      return str   
  }
  

console.log(firstNotRepeatingCharacter('dctacademy'))