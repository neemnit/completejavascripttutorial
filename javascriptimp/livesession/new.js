const values=[true,false,0,100,'',null,undefined,-1,'dct',{}]
function findTruthy(){
  const result=  values.filter(function(ele){
      return  ele
    })
    return result
}
console.log(findTruthy(values))
