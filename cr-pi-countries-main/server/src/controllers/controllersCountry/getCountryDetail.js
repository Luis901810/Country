
const { Country, Activity} = require("../../db")


const getCountryByDetail = async(id) =>{

    try{

        const response = await Country.findByPk(id,{
            include:{
                model: Activity,
                attributes:["name",  "difficulty", "duration", "season" ],
                through:{
                    attributes:[]

                }
               
            }
        })
        return response;

    } catch(error){
        throw error

    }
};

module.exports = getCountryByDetail;