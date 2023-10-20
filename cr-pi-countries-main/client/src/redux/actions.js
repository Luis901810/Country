import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GET_ALL_COUNTRY, GET_BY_NAME_COUNTRY, DETAIL_COUNTRY, URLCOUNTRYS,URLDETAIL,ORDER_BY_CONTINENT, ADD_ACTIVITY, URLACTIVITY, RESET_DETAIL_COUNTRY, LOADING, ORDER_BY_NAME} from "./actions-types";

export const loading = (stateLoading) =>{
    return{
        type:LOADING,
        payload: stateLoading
    }
}

// buscar a todos 
export const getAllCountry = () =>{
    
        return async function (dispatch){
        try{
        dispatch(loading(true))
        const response = await axios(`${URLCOUNTRYS}`);
        return dispatch({
            type: GET_ALL_COUNTRY,
            payload:response.data
        })

        }catch (error){

            toast.error("Error al cargar a todos los países: " + error.message);
        }finally{
            dispatch(loading(false))
        }
    }
}

// buscar por nombre

export const getByName = (name) =>{
    return async function ( dispatch){

        try{
            dispatch(loading(true))

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

        }finally{
            dispatch(loading(false))
        }
    }
}

// agregar actividad

export const addActivity = (input) =>{
     return async (dispatch) =>{
        try {
            const { data } = await  axios.post(`${URLACTIVITY}`, input)
            return dispatch({
                type:ADD_ACTIVITY,
                payload: data

            }) 
        } catch (error) {

            toast.error(`Error al Crear la Actividad:` + error.message)
          
        }
        finally{
            dispatch(loading(false))
        }
     } 
}
// buscar por id 
export const getdetailCountry = (id) =>{

    return async (dispatch)=>{
        try{
            dispatch(loading(true))
            const response = await axios(`${URLDETAIL}/${id}`)
            return dispatch({
                type: DETAIL_COUNTRY,
                payload: response.data
            })

        }catch (error) {
            toast.error("Error al mostrar el detalle: " + error.message);
        }
        finally{
            dispatch(loading(false))
        }
    } 
}
// limpiar detalle

export const resetCountryDetail = ()=>{
    return{

        type : RESET_DETAIL_COUNTRY,
    }
}

export const orderByName = (payload) =>{
    return {
        
            type: ORDER_BY_NAME,   
            payload: payload
        
    }
}

export const orderByContinent = (payload)=>{
    return{
        type:ORDER_BY_CONTINENT ,
        payload: payload
    }
}