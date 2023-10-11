const getCountryByName = require("../controllers/controllersCountry/getCountryByName");

const handlerCountryByName = async(req, res) =>{

    try{

        const { name } = req.query;

        if(!name){
            return res.status(400).json({error:  `debe ingresar un nombre de pais valido en la busqueda: ${name} `})
        }
        const response = await getCountryByName(name)

        if(response.length === 0){
            return res.status(400).json({error:  `No se encontro pais con ese nombre: ${name} `})
        }
        return res.status(200).json(response)

    }catch (error){

        res.status(500).json({error: error.message})

    }
    
}

module.exports=handlerCountryByName;