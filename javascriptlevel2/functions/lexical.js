const str1='outside functions'//global
function greet(){//functions
    const str2='inside functions'
    console.log('str2',str2)//str2 inside functions
   console.log('str1',str1)//str1 outside functions
   function hello(){
       console.log('hello',str2)//hello inside function
       console.log('hello',str1)//hello outside function
    
 } hello()}


    
    

greet()