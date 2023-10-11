const getCountryDetail = require("../../controllers/controllersCountry/getCountryDetail");


const handlerCountryDetail = async(req, res) =>{
    
    const { id } = req.params;
    
    
    try{

        if(!id){
            return res.status(400).json({error: 'ingrese un id valido '});
        }
        const response = await getCountryDetail(id)
        res.status(200).json(response)

    }catch(error){
        res.status(500).json({error: error.message})

    }
}

module.exports = handlerCountryDetail;