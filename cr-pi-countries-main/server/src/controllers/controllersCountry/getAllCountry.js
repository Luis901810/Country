const axios = require ("axios");
const { Country } = require("../../db")
const { infCleaner } = require ("../../util/util")



const getAllCountry = async () =>{

    try{
        const resDB = await Country.findAll();
                
        const resApi =(await axios("http://localhost:5000/countries")).data;

        const infApi = infCleaner(resApi)

        const savedCountryPromise = infApi.map(async (data) =>{

            const {id, name, flag, continent, capital, subregion,area,  population}= data;
        try{
            let country = await  Country.create({
                id,
                name, 
                flag,
                continent,
                capital,
                subregion,
                area,
                population,
                created: false,
               
            
            });
                       
            if(!country){
                console.log("no se pudo crear los paises en la base de datos", country)
            return null;
            }
            return country
        } catch (error) {
            console.error("error al crear el pais", error);
            return null;
        }
    });
     
      
        const savedCountry = await Promise.all(savedCountryPromise);
       
        return [ ...resDB, ...savedCountry ]
        
      
    }catch (error) {
        throw error;
        

    }
}
module.exports = getAllCountry;