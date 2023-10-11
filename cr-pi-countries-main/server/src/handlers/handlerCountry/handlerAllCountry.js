const getAllCountry = require ("../../controllers/controllersCountry/getAllCountry")

const handlerAllCountry = async(req, res) =>{
    try{

        const response = await getAllCountry()
        return  res.status(200).json(response)

    }catch (error){
        res.status(500).json({error: error.message})
    }
}

module.exports = handlerAllCountry;