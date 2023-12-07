const rModel = require('../models/routeModel')
const mongoose = require('mongoose')

//GET ALl DATA (READ)
const getAllData = async(req, res) => {
    const allWorkout = await rModel.find({}).sort({createdAt: -1})
    res.status(200).json(allWorkout)
}
//CREATE NEW DATA
const createData = async(req, res) => {
    const {name, age, gender} = req.body
    //Add a document to the database
    try{
        const createWorkout = await rModel.create({ name, age, gender })
        res.status(200).json(createWorkout)
    }catch(err){
        res.status(400).json({ error: err.message })
    }
}
//GET SINGLE DATA (READ)
const getSingleData = async(req, res) => {
    /*The req.params property is an object containing properties mapped to the named route “parameters”. 
    For example, if you have the route /student/:id, then the “id” property is available as req.params.id.*/

    const { id } = req.params

    //Checking if the ID is valid since it needs to be a string of 12 bytes or 24 hex
    if(!mongoose.Types.ObjectId.isValid(id)){
        /*Note: We use return statement when checking to complete the run and not 
        proceed to the next code lines*/

        return res.status(404).json({error: "Invalid ID"}) 
    }
    
    const singleWorkout = await rModel.findById(id)

    if(!singleWorkout){
        return res.status(404).json({error: "Document not found"}) 
    }
    res.status(200).json(singleWorkout)
}
//UPDATE A DATA
const updateData = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"}) 
    }

    const updateWorkout = await rModel.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!updateWorkout){
        return res.status(404).json({error: "Document not found"}) 
    }
    res.status(200).json(updateWorkout)
}
//DELETE A DATA
const deleteData = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"}) 
    }

    const deleteWorkout = await rModel.findByIdAndDelete({_id: id})

    if(!deleteWorkout){
        return res.status(404).json({error: "Document not found"}) 
    }
    res.status(200).json(deleteWorkout)
}

module.exports = {
    createData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
}