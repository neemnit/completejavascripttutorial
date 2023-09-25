//passing argument to methods
const calculator={
    result:0,
    add:function(n=0){
      return  this.result=this.result+n
    },
    minus:function(n){
        return this.result=this.result-n
    },
    multiply:function(n=1){
        return this.result=this.result *n
    },
    division:function(n=1){
        return this.result=this.result/n
    },//reset
    reset:function(){
        return this.result=0
    }
}
console.log(calculator.add(5))
console.log(calculator.add(10))
console.log(calculator.minus(3))
console.log(calculator.multiply(2))
console.log(calculator.division(8))
console.log(calculator.reset())