var a; 
const express= require('express');
a=express();
a.get('/',(req,res)=>{
  res.send('welcome tovFEFdFFFSfsaSvgj eertjbggghooty');
  res.end();
});
a.get('/home',(req,res)=>{
   res.write("this is the home");
   res.end();
});
a.get('/about',(req,res)=>{
    res.send('[{"name":"raghv","age":21},{"name":"sunitha","age":12}] ');
    res.send("we are us \n\n\n\n this is us");
    res.end();
})

a.listen(3000);