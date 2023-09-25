const counter={
    count:0,
    up:function(){
        this.count=this.count+1
        return this.count
   },
   down:function(){
       this.count=this.count-1
       return this.count
   },
   multiply:function(){
   return this.count=this.count *3
   },
   reset:function(){
       return this.count=0
   }
}
console.log(counter.up())
console.log(counter.up())
//console.log(counter.down())
//console.log(counter.multiply())
console.log(counter.reset())