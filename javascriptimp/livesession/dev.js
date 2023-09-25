const dev = {
    name: 'shreyas',
    skills: ['js','react','node'],
    details: function(){
    
    
        return `${this.name} has ${this.skills.length} skills  `
    },
    show: function() {
        
        // TYPE 1 - assign this to another variable 
     //const _this = this 
      //  _this.skills.forEach(function(ele) {
          //  console.log(`${_this.name} knows ${ele}`)
       //  })

        // TYPE 2 - using the bind method
      //  this.skills.forEach(function(ele){
          // // console.log(this)
          // console.log(`${this.name} knows ${ele}`)
        // }.bind(this))

        // TYPE 3 - using arrow function
        this.skills.forEach((ele) => {
            //console.log(this)
            console.log(`${this.name} knows ${ele}`)
        })

        // TYPE 4 - using for loop / for of loop
    }
}

console.log(dev.details())

dev.show()

/*
shreyas know js 
shreyas know react 
shreyas know node
*/
