
const { Country, Activity, CountryActivity } = require("../../db")


const getCountryByDetail = async(id) =>{

    

    try{

        const response = await Country.findByPk(id,{
            include:{
                model: Activity, through: CountryActivity
               
            }
        })
        return response;

    } catch(error){
        throw error

    }
};

module.exports = getCountryByDetail;