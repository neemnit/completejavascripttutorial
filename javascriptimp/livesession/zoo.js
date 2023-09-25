/*Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.

Examples:*/

const myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Phil", ["groundhog", 11]]

]

  /*function zooInventory(myZoo){
    const result=[]
    for(let i=0;i<myZoo.length;i++){
     //  let result=[]
    result.push(`${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`)
        }
    
    return result

 } */function zooInventory(myZoo){
 const zoo= myZoo.map(function(ele){
    return `${ele[0]} the ${ele[1][0]} is ${ele[1][1]}`
 })
 return zoo
}
 console.log(zooInventory(myZoo))

//OUTPUT: (array below)
/*[
  'King Kong the gorilla is 42', 
  'Nemo the fish is 5',
  'Phil the groundhog is 11'
]
/*Aniruddha SG
To
Me
(Direct Message)
7:30:53 PM
AS
Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.

Each input array will be nested 3 levels deep. Study the examples below to understand how the data is structured.

Examples:

const myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Phil", ["groundhog", 11]]
];
INPUT: zooInventory(myZoo);

OUTPUT: (array below)
[
  'King Kong the gorilla is 42', 
  'Nemo the fish is 5',
  'Phil the groundhog is 11'
]*/