

const infCleaner = (data) => {

try{
    return data.map(country =>{

    return {
        id: country.cca3 || "",
        name: country.name?.official || "",
        flag: country.flags?.png || "",
        continent: country.continents ? country.continents : [country.region],
        capital: country.capital ? country.capital : [],
        subregion: country.subregion || "",
        area: country.area || 0,
        population: country.population || 0,
    }
});
} catch (error){
    console.log("Error en infCleaner", error);
    return[];

}
}
module.exports ={
    infCleaner
} 