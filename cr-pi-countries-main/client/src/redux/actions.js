import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, URLCOUNTRYS} from "./actions-types";

export const getAllCountry = () =>{
    
        return async function (dispatch){
        try{

        const response = await axios(`${URLCOUNTRYS}`);
        return dispatch({
            type: GET_ALL_COUNTRY,
            payload:response.data
        })

        }catch (error){
            toast.error("Error al cargar a todos los países: " + error.message);

        }
    }
}

export const getByName = (name) =>{
    return async function ( dispatch){
        try{

        if(!name || !isNaN(name) || !name.length){
            return
        }

            const response = await axios(`${URLCOUNTRYS}?name=${name}`);
            return dispatch({
                type:GET_BY_NAME_COUNTRY,
                payload:response.data
            })

        }catch(error){
            toast.error("Error al buscar países: " + error.message);

        }
    }
}
// export const addActivity (dispatch){

//     const response = await  axios.post()
//     type:ADD_ACTIVITY,
// }