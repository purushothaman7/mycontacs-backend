const { error } = require("jquery");

const getContacts=async(req,res)=>{
   
    res.status(201).json({message : "Get All Contacts"});
};

const createContact =async(req,res)=>{
    console.log("body is",req.body)
    const {name,number}=req.body;
    if(!name || !number){
        res.status(400);
        throw new Error("All fields are mandotory");
    }
    res.status(200).json({message : "Create Contact"});
};

const getContact =async(req,res)=>{
    res.status(200).json({message : `Get Contact for ${req.params.id}`});
};

const updateContact=async(req,res)=>{
    res.status(200).json({message : `Update Contact ${req.params.id}`});
};

const deleteContact =async(req,res)=>{
    res.status(200).json({message : `Get Contact ${req.params.id}`});
};

module.exports={getContacts,getContact,createContact,updateContact,deleteContact};