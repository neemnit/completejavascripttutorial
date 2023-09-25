function domainName(url){
    if(url.includes('www')){
       return (url.slice((url.indexOf('.')+1), url.lastIndexOf('.')))
        
    }
    if(!url.includes('www')){
      return  url.slice(url.indexOf('/') +2,url.indexOf('.'))
    
        
    }


    //your code here
  }



  console.log(domainName("http://www.zombie-bites.com"))
  console.log(domainName("http://github.com/carbonfive/raygun"))