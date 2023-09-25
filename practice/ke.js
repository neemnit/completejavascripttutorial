function keys(a) {
    //let result=[]
    for (const key in a) {
        //result.push(key)
        return key
    }
   // return result

}
console.log(keys({a:2,b:3}))