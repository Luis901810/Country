const axios = require("axios");
const { Country } = require("../../db");
const { infCleaner } = require("../../util/util");

const getAllCountry = async () => {
  try {
    const resDB = await Country.findAll();

    const resApi = (await axios("http://localhost:5000/countries")).data;

    const infApi = infCleaner(resApi);

    const savedCountry = [];
    for (const data of infApi) {
      const { id, name, flag, continent, capital, subregion, area, population } = data;
      try {
        const existingCountry = await Country.findOne({
          where: {
            id: id
          }
        });

        if (existingCountry) {
          savedCountry.push(existingCountry);
        } else {
          let country = await Country.create({
            id,
            name,
            flag,
            continent,
            capital,
            subregion,
            area,
            population,
            created: false
          });

          if (!country) {
            console.log("No se pudo crear los países en la base de datos", country);
            return null;
          }
          savedCountry.push(country);
        }
      } catch (error) {
        console.error("Error al crear el país", error);
        return null;
      }
    }

    return [ ...resDB];
  } catch (error) {
    throw error;
  }
};

module.exports = getAllCountry;
