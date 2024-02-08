const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://shiblup8:2345@cluster0.ijzizwa.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db conneccted")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel