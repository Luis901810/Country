

const { Activity, Country } = require("../../db")

const handlersActivityAll = async({name, difficulty, duration, season, CountryId})=>{
    try {
        if(!name || !difficulty || !duration || !season || !CountryId){

            throw new Error("faltan datos ")
        }
        const existringActivity = await Activity.findOne({
            where:{
                name,
                season
            } 
        })
        if(existringActivity){
            throw new Error(" La actividad con el mismo nombre y temporada ya existen")
        }

        const created = await Activity.create({
            name,
            difficulty, 
            duration, 
            season
        });
        const countriesFound = await Country.findAll({
            where:{
                id: CountryId
            }
        })

        return await created.addCountries(countriesFound)
        
    } catch (error) {
        throw error
        
    }
}

module.exports = handlersActivityAll;