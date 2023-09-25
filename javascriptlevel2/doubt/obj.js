var obj={
    i:10,
    b:()=> console.log(this.i,this),
    c:function(){
        console.log(this.i,this)
    }

}
obj.b()
obj.c()
var Foo=()=>{}
var foo=new Foo()