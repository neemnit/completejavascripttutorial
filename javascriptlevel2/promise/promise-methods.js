const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise1 resolved')
    }, 2000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise 2 resolved')
    }, 2000);
})
/*promise1
.then((response)=>{
    console.log(response)
})
promise2
.then((response)=>{
    console.log(response)
})*/

Promise.all([promise1,promise2])
.then((values)=>{
    console.log(promise1)
    console.log(values)
})