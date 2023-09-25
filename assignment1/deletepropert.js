const student={
    name:'david',
    sclass:'VII',
    roll:12

}
 function deleteProperty(student,sclass){
  if(Object.keys(student).includes(sclass)){
      delete student.sclass
  }
  return student

} 
console.log(deleteProperty(student,'sclass'))