const promiseObj=new Promise((resolve,reject)=>{
    //producing code
    setTimeout(() => {
        const someTask=false
        const data=[{id:1,name:'nitish'},{id:2,name:'Rohit'}]
        if(someTask){
            resolve(data)
            
        }
        else{
            reject(new Error('something went wrong'))
        }
    }, 500);


})
promiseObj
.then((response)=>{
console.log(response)
})
.catch((erro)=>{
    console.log( erro.message)
})
//console.log(promiseObj)