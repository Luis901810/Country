
const { Country, Activity} = require("../../db")


const getCountryByDetail = async(id) =>{

    try{

        const response = await Country.findByPk(id,{
            include:{
                model: Activity,
               
            }
        })
        return response;

    } catch(error){
        throw error

    }
};

module.exports = getCountryByDetail;