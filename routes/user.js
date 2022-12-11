const {Router}= require('express');
 const router=Router();
 const { v4: uuidv4 } = require('uuid');
 //const usercontroller=require('../controllers/user');

let users=[
    // {
    //     FirstName :"Aman",
    //     LastName: "Islam",
    //     Age: 20
    // },
    // {
    //     FirstName :"Tooba",
    //     LastName: "Azhar",
    //     Age: 21
    // }
 ]
 //All routes are starting with /users
 router.get('/',(req,res)=>{
    console.log(users);
    res.send('Hello')
 });

 router.post('/',(req,res)=>{
   const user=req.body;
   //users.push
   users.push({...user, id:uuidv4()});
   res.send(`User with the name ${user.FirstName} added to the dataBase!`) 
});
//colon expects anything for hitting the route and stores the value is req.params
 router.get('/:id',(req,res)=>{
    const {id}=req.params;
    //console.log(req.params);
 const founduser= users.find((user)=>user.id==id);
 res.send(founduser);
 });

 router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    //remving the element for which ftn returns false
   users=users.filter((user)=>{
     user.id!=id;
   })
   res.send(`User with id ${id} is deleted from database`);
 });

 router.patch('/:id',(req,res)=>{
   const {id}=req.params;
  const{FirstName,LastName,Age}=req.body;
  const user=users.find((user)=>user.id==id);

  if(FirstName){
   user.FirstName=FirstName;
  }
  if(LastName){
   user.LastName=LastName;
  }
  if(Age){
   user.Age=Age;
  }
  res.send(`User with id ${id} has been updated`);
});

 module.exports = router;