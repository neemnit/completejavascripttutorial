function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
    
      return (name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
 console.log( myFunc());