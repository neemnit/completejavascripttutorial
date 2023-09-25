function likes(names) {
    if(names.length===0){
        return 'no one likes this'
    }
    if(names.length===1){
        str=`${names[0]} likes this`
    }

    if(names.length===2){
        str=`${names[0]} and ${names[1]} like this  `
        return str
    }
    if(names.length===3){
        str=`${names[0]}, ${names[1]} and ${names[2]} like this`
        return str
    }
    if(names.length>3){
        str=`${names[0]}, ${names[1]} and ${names.length-2} other like this`
        return str
    }



    
    // TODO
   // return str
  }



  console.log(likes(['perter','bvdf','johan','kiran']))