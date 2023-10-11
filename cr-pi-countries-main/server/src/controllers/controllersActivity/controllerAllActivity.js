const { Activity } = require("../../db");

const getActivityAll = async ( req, res) =>{

    try{

    const AllActivity = await Activity.findAll();

        return res.status(200).json(AllActivity)

    }catch (error){
        return  res.status(500).json({error: error.message})
    }

    
}

module.exports = getActivityAll;