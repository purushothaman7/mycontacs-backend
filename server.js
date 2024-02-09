const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config()

const app=express();

app.use(express.json())

const port =process.env.PORT|| 5000;
app.use("/api/contacts/",require("./route/contactRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});
