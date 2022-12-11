const express = require('express');
const app=express();
const userRouters=require('./routes/user');
const port=5000; 

app.use(express.urlencoded());
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send("Hello from Home page")
})
app.use('/users',userRouters)

app.listen(port,()=>{
    console.log(`Server is running on port https://localhost/${port}`)
})