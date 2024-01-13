import { HackerList } from "../models/HackerModel.js";

//make action of routes and handling the request, intract models, send responses back to client

//---------------------createAllHackerList Page LOGIC--------------------------------//
//using fat arrow function


const createAllHackerList = async (req, res) => {
    try {
      const { name, image, title, age, code, address, category, publishYear, desc } = req.body;
  
      // Basic validation to check if required fields are present
      if (!name || !title || !age || !code || !address || !category || !publishYear || !desc) {
        return res.status(400).json({ msg: "Missing required fields" });
      }
  
      const hackerCreate = await HackerList.create({
        name,
        image,
        title,
        age,
        code,
        address,
        category,
        publishYear,
        desc,
      });
  
      return res.status(201).send(hackerCreate);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Message not sent, please check" });
    }
  };

//---------------------getAllHackerList Page LOGIC--------------------------------//

const getAllHackerList = async (req, res) => {
    try {
        const hackerData = await HackerList.find({});
        return res.status(201).json({
            count: hackerData.length,
            data: hackerData,
        })
    } catch (error) {
        console.error(error);
        res.status(501).json({msg:" please check"})
    }
}

//---------------------get One Page LOGIC--------------------------------//

const getOneHacker = async (req,res) => {
    try {
        const {id} = req.params;
        const hackerData = await HackerList.findById(id);
        if(!hackerData)  //if result false then print false
          {
             return res.status(404).json({message: 'Data Not Found!'});
          }
        return res.status(200).json(hackerData);
    } catch (error) {
        console.error(error);
        res.status(501).json({msg:" Error in Backend"})
    }
}

//---------------------Edit LOGIC--------------------------------//

const editHacker = async(req, res) => {
    try {
        if (!name || !title || !age || !code || !address || !category || !publishYear || !desc) {
            return res.status(400).json({ msg: "Missing required fields" });
          }

          const {id} = req.params;

          const result = await HackerList.findByIdAndUpdate(id, req.body);

          if(!result)  //if result false then print false
          {
             return res.status(404).json({message: 'Data Not Found!'});
          }
          return res.status(200).json({message: 'Data updated Successfully'});

          
    } catch (error) {
        console.error(error);
        res.status(501).json({msg:" Error in Backend"})
    }
}


//---------------------Delete LOGIC--------------------------------//

const deleteHacker = async(req, res) => {
    try {
        const {id} = req.params;
        const hackerData = await HackerList.findByIdAndDelete(id);
        if(!hackerData)
        {
            return res.status(404).json({message: 'Not Found'});
        }
        return res.status(200).send({message: 'Deleted Successfully'})
    } catch (error) {
        console.error(error);
        res.status(501).json({msg:" Error in Backend"})
    }
    
}



export default {createAllHackerList, getAllHackerList, getOneHacker, editHacker, deleteHacker};
