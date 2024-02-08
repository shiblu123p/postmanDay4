// 1.importing the express
const express = require('express')
const employeeModel = require('./model')

// 2.Initialize express
const app = new express()

//3.miiddleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.API Creation
app.get('/',(req,res)=>{
    res.send("Message from server")
})

app.get('/trial',(req,res)=>{
    res.send("Message from trial API")
})

app.get('/data',(req,res)=>{
    res.json({"name":"shiblu","Age":19})
})

app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})
//4.port
app.listen(8080,()=>{
    console.log("port 8080 is up and running")
})
// api to add data to db
app.post('/add',async(req,res)=>{
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})

//api to view data from db
app.get('/view',async(req,res)=>{
    let result = await employeeModel.find();
    res.json(result);
})








// Deleting a document
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})

// to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})