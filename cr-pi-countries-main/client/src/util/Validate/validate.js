export const validateName = (name) =>{
    const namer = new RegExp(/\d/);
    if(!name || name.trim().length === 0){
        return "Nombre Requerido"
    }else if(namer.test(name)){
        return "El nombre no puede tener Numero";
    }
}

export const validateDifficulty = (difficulty) =>{
    if(!difficulty){
        return "Dificultad requerida"
    }else if(difficulty < 1 || difficulty > 5){
        return "La Dificultad debe estar en el rango: 1 y 4"

    }else if(isNaN(difficulty)){
        return "La dificultad debe ser un número."
    }
}

export const validateDuration =(duration) =>{
    if (!duration){
        return "Duracion Requerida";
    } else if(isNaN(duration) || duration <= 0 ){
        return "Debe ingresar una duración Numerica.";
    }
}

export const validateCountryId = (countries) =>{
    if(!countries ||countries.length === 0){
        return  "Debe Elegir uno o mas Paises";
    }
}

export const validateSeason = (season) =>{
    if(!season){
        return "Temporada es requerida";
    }else if(season !== "Verano" && season !== "Otoño" && season !== "Invierno" && season !== "Primavera" ){
        return "Elija la Temporada Correcta";
    }
}