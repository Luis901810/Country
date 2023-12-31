const handlersActivityAll = require("../../handlers/handlersActivity/handlerCreateActivity")

const getActivityCreate = async (req, res) =>{

    const {  name, difficulty, duration, season, CountryId} = req.body;


    try {
        
        const response = await handlersActivityAll({name, difficulty, duration, season, CountryId })
        
        
       return  res.status(200).json(response)

        
    } catch (error) {
      return   res.status(500).json({error: error.message})
        
    }
}

module.exports = getActivityCreate;