
const { Country } = require("../../db") 
const { Op } = require("sequelize");


const getCountryByName = async (name) =>{
    try{

        if(name.length >= 3){
            const countries = await Country.findAll({
                where:{
                    name: { 
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            return countries
        }else{
            throw new Error ('El nombre del pais debe tener al menos 3 caracteres ')
        }


    }catch (error) {
        throw error;
    }

    
}
module.exports = getCountryByName;