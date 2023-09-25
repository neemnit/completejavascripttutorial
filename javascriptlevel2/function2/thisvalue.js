console.log(this)//{}
//function f1(){
  //  console.log(this)
//}
//f1()//object[global]
//const af=()=>{
   // console.log(this)
//}
/*af()//{}
const person={
    name:'steve',
    details:function(){
        console.log(this.name)
    }
}*/
//person.details()//steve
function f3(){
    const person={
        name:'joha',
        arr:['nit','kumar'],
        details:function(){
            console.log(this)
        
        this.arr.forEach(element => {
            console.log(element)
        
        })
        
    
    
    }

}

    
person.details()
//console.log(person.mule(7))
}
f3()